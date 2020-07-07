package com.oldpoint;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.json.JSONObject;

import javax.swing.*;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: OldPoint
 * @Date: 2019/12/4 14:43
 */
class CopySdkForProject {

    private static String RFilePath;
    private static Element ConfigElement;
    private String applicationName;
    private String mainActivityMsg = "android.intent.action.MAIN";
    private String application = "application";
    private String manifest = "manifest";
    private String attrName = "name";
    private String startActivityName;
    private String mainActivity;

    private List<String> deWeight = new ArrayList<>();

    /**
     * 开始复制文件
     */
    void determineTheCopy(String target, String channel) {
        ConfigElement = CopyTool.getConfigurationDocument().getRootElement().element(channel);
        Constants.CopyFiles = ConfigElement.element("CopyPath").element("PathFiles").elements();
        String source = new File(target).getParent() + "\\" + ConfigElement.getName();
        // 复制文件
        for (Object copyFile : Constants.CopyFiles) {
            Element element = (Element) copyFile;
            try {
                copyFile(new File(source + element.getText()), new File(target + element.getText()));
            } catch (IOException e) {
                CopyTool.hint(target + element.getText() + " Copy Failed", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
        // 复制文件夹文件
        RFilePath = target + ConfigElement.element("CopyPath").attribute("R").getValue();
        Constants.CopyDirs = ConfigElement.element("CopyPath").element("PathDirs").elements();
        for (Object copyDir : Constants.CopyDirs) {
            Element element = (Element) copyDir;
            copyDirectory(source + element.getText(), target + element.getText());
        }
        // 设置版本号
        setVersion(target);
        // 修改AndroidManifest.xml文件
        parseAndroidManifest(source, target);
        // 更改apk名称
        setApkName(new File(target));
        // 添加 assets 目录下的configurationParameter.json 文件
        addConfigurationParameter(target);
    }

    private void addConfigurationParameter(String path) {
        File configurationParameterFile = new File(path + "\\Project\\assets\\configurationParameter.json");
        JSONObject jsonObject = new JSONObject();

        jsonObject.put("CommonParameter", selectParameter(Constants.CommonDataStringJTextFieldMap));
        jsonObject.put("AloneParameter", selectParameter(Constants.AloneDataStringJTextFieldMap));
        jsonObject.put("AdParameter", selectParameter(Constants.AdDataStringJTextFieldMap));

        CopyTool.writerFileData(configurationParameterFile, jsonObject.toString());
    }

    private JSONObject selectParameter(Map<String, JTextField> dataMap) {
        JSONObject jsonObject = new JSONObject();
        for (Map.Entry<String, JTextField> entry : dataMap.entrySet()) {
            if ("packageName".equals(entry.getKey()) || "version".equals(entry.getKey()) || "app_key".equals(entry.getKey())) {
                continue;
            }
            if ("deBug".equals(entry.getKey())) {
                boolean debug = "true".equals(entry.getValue().getText());
                jsonObject.put(entry.getKey(), debug);
            } else {
                jsonObject.put(entry.getKey(), entry.getValue().getText());
            }
        }
        return jsonObject;
    }


    private void setApkName(File target) {
        String apkName = target.getName();
        File stringsFile = new File(target + "\\Project\\res\\values\\strings.xml");
        try {
            Document stringsDocument = CopyTool.getXmlDocument(stringsFile);
            List elements = stringsDocument.getRootElement().elements();
            for (Object o : elements) {
                Element element = (Element) o;
                String value = element.attribute(attrName).getValue();
                if ("app_name".equals(value)) {
                    element.setText(apkName);
                }
            }
            CopyTool.writerXml(stringsFile, stringsDocument);
        } catch (DocumentException e) {
            CopyTool.hint(stringsFile + " Read Failed", JOptionPane.ERROR_MESSAGE);
        }
    }

    /**
     * 将源文件中需要的节点添加到目标文件中
     *
     * @param source 源文件
     * @param target 目标文件
     */
    private void parseAndroidManifest(String source, String target) {
        String path = "\\Project\\AndroidManifest.xml";
        File sourceFile = new File(source + path);
        File targetFile = new File(target + path);
        try {
            // 备份目标文件AndroidManifest.xml 文件
            String oldAndroidManifest = new File("").getCanonicalPath() + "\\OldAndroidManifest.xml";
            copyFile(targetFile, new File(oldAndroidManifest));

            startActivityName = ConfigElement.attribute("startActivityName").getValue();

            // 解析源文件和目标文件
            Document sourceDocument = CopyTool.getXmlDocument(sourceFile);
            Document targetDocument = CopyTool.getXmlDocument(targetFile);

            // 获取源文件的mainActivity
            getMainActivityName(sourceDocument.getRootElement());

            // 修改目标文件StartActivity
            fixTargetStartActivityName(targetDocument.getRootElement());
            CopyTool.writerXml(targetFile, targetDocument);

            // 将源文件内容拷贝到目标文件
            getNodes(sourceDocument.getRootElement(), targetDocument.getRootElement());
            CopyTool.writerXml(targetFile, targetDocument);

            // 更改目标文件的一些设置内容
            setTargetXml(targetDocument.getRootElement());
            CopyTool.writerXml(targetFile, targetDocument);

        } catch (IOException e) {
            CopyTool.hint(sourceFile + " Backup Failure", JOptionPane.ERROR_MESSAGE);
        } catch (DocumentException e) {
            CopyTool.hint(sourceFile + " or " + targetFile + " Read Failed", JOptionPane.ERROR_MESSAGE);
        }

    }
    
    /**
     * 获取主的Activity名称
     *
     * @param element  xml父节点
     * @return void
     * @date 2019/12/12 10:37
     */
    private void getMainActivityName(Element element) {
        List attributes = element.attributes();
        for (Object o : attributes) {
            Attribute attribute = (Attribute) o;
            if (mainActivityMsg.equals(attribute.getValue())) {
                Element parent = element.getParent().getParent();
                mainActivity = parent.attribute(attrName).getValue();
            }
        }
        List elements = element.elements();
        for (Object o : elements) {
            Element element1 = (Element) o;
            getMainActivityName(element1);
        }
    }


    private void fixTargetStartActivityName(Element elementRoot) {
        List attributes = elementRoot.attributes();
        for (Object o : attributes) {
            Attribute attribute = (Attribute) o;
            if (attrName.equals(attribute.getName())) {
                deWeight.add(attribute.getValue());
            }
            if (mainActivityMsg.equals(attribute.getValue()) || "android.intent.category.LAUNCHER".equals(attribute.getValue())) {
                Element element = elementRoot.getParent().getParent();
                if (!mainActivity.equals(element.attribute(attrName).getValue())) {
                    element.attribute(attrName).setValue(startActivityName);
                    elementRoot.getParent().remove(elementRoot);
                }
            }
        }
        List elements = elementRoot.elements();
        for (Object o : elements) {
            Element element = (Element) o;
            fixTargetStartActivityName(element);
        }
    }

    private void setTargetXml(Element elementRoot) {
        String appKey = "app_key";
        List attributes = elementRoot.attributes();
        // 更改application
        if (application.equals(elementRoot.getName())) {
            if (elementRoot.attribute(attrName) != null) {
                elementRoot.attribute(attrName).setValue(applicationName);
            } else {
                elementRoot.addAttribute("android:name", applicationName);
            }
        }
        // 更改包名
        if (manifest.equals(elementRoot.getName())) {
            elementRoot.attribute("package").setValue(Constants.CommonDataStringJTextFieldMap.get("packageName").getText());
        }
        for (Object o : attributes) {
            Attribute attribute = (Attribute) o;
            // 更改AppKey
            if (appKey.equals(attribute.getValue())) {
                elementRoot.attribute("value").setValue(Constants.AloneDataStringJTextFieldMap.get(appKey).getText());
            }
        }
        List elements = elementRoot.elements();
        for (Object o : elements) {
            Element element = (Element) o;
            this.setTargetXml(element);
        }
    }

    private void getNodes(Element sourceElement, Element targetElement) {
        String parentName = sourceElement.getParent() == null ? "" : sourceElement.getParent().getName();

        // 获取applicationName
        if (application.equals(sourceElement.getName())) {
            applicationName = sourceElement.attribute(attrName).getValue();
        }

        // 去除根节点 主Activity 和 application 节点的添加
        if (null != sourceElement.getParent() && !application.equals(sourceElement.getName()) && !startActivityName.equals(sourceElement.attribute(attrName).getValue())) {
            boolean exist = true;
            for (String s : deWeight) {
                if (s.equals(sourceElement.attribute(attrName).getValue())) {
                    exist = false;
                }
            }
            if (exist) {
                Element copyElement = (Element) sourceElement.clone();
                copyElement.detach();

                // 判断需要添加的标签是否在根目录下
                if (manifest.equals(parentName)) {
                    targetElement.add(copyElement);
                } else {
                    targetElement.element(parentName).add(copyElement);
                }
            }
        }

        // 递归遍历当前节点所有的子节点
        String activity = "activity";
        if (!activity.equals(sourceElement.getName())) {
            // 所有一级子节点的list
            List elements = sourceElement.elements();
            for (Object o : elements) {
                Element element = (Element) o;
                this.getNodes(element, targetElement);
            }
        }
    }

    /**
     * 更改版本号
     *
     * @param path 文件主路径
     */
    private void setVersion(String path) {
        Element apkToolElement = ConfigElement.element("Parameter").element("CommonParameter").element("apkTool");
        path = path + "\\Project\\" + apkToolElement.getName().toLowerCase() +".yml";
        File file = new File(path);
        List list = apkToolElement.attributes();
        Map<String, String> map = new HashMap<>(list.size());
        for (Object o : list) {
            Attribute attribute = (Attribute) o;
            map.put("  " + attribute.getName(), attribute.getValue());
        }
        try {
            String str = "1";
            String[] strings;
            StringBuilder builder = new StringBuilder();
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String version = Constants.CommonDataStringJTextFieldMap.get(apkToolElement.getText()).getText();
            if (str.equals(version)) {
                version = map.get("  versionCode");
            }
            while ((str = reader.readLine()) != null) {
                strings = str.split(":");
                if (map.containsKey(strings[0])) {
                    str = strings[0] + ": " + map.get(strings[0]);
                    if (strings[0].contains("versionCode")) {
                        str = strings[0] + ": \'" + version + "\'";
                    }
                    if (strings[0].contains("versionName")) {
                        String regex = "(.)";
                        version = version.replaceAll(regex, "$1.");
                        version = version.substring(0, version.length() - 1);
                        str = strings[0] + ": " + version;
                    }
                }
                builder.append(str);
                builder.append("\r\n");
            }
            reader.close();

            CopyTool.writerFileData(file, builder.toString());
        } catch (FileNotFoundException e) {
            CopyTool.hint(path + " FileNotFound", JOptionPane.ERROR_MESSAGE);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 拷贝文件夹里所有文件但是跳过R文件目录
     *
     * @param sourceDir 源文件
     * @param targetDir 目标文件
     */
    private void copyDirectory(String sourceDir, String targetDir) {
        // 如果是R文件目录就跳过
        if (sourceDir.startsWith(RFilePath)) {
            return;
        }
        // 新建目标目录
        boolean mkdirs = new File(targetDir).mkdirs();
        System.out.println("copyDirectory:" + mkdirs);
        // 获取源文件夹当下的文件或目录
        File[] files = new File(sourceDir).listFiles();
        String filePath = null;
        assert files != null;
        for (File file : files) {
            if (file.isFile()) {
                try {
                    filePath = file.getCanonicalPath();
                    copyFile(file, new File(targetDir + File.separator + file.getName()));
                } catch (IOException e) {
                    CopyTool.hint(filePath + " Copy Failed", JOptionPane.ERROR_MESSAGE);
                }
            }
            if (file.isDirectory()) {
                String dirPathName = File.separator + file.getName();
                copyDirectory(sourceDir + dirPathName, targetDir + dirPathName);
            }
        }
    }

    /**
     * 复制文件
     *
     * @param sourceFile 源文件
     * @param targetFile 目标文件
     * @throws IOException 无源文件读取
     */
    private void copyFile(File sourceFile, File targetFile) throws IOException {
        // 新建文件输入流并对它进行缓冲
        FileInputStream inputStream = new FileInputStream(sourceFile);
        // 新建文件输出流并对它进行缓冲
        if (!targetFile.exists()) {
            File file = new File(targetFile.getParent());
            boolean mkdirs = file.mkdirs();
            System.out.println("copyFile:" + mkdirs);
        }
        FileOutputStream outputStream = new FileOutputStream(targetFile);

        byte[] b = new byte[1024];
        int len;
        while ((len = inputStream.read(b)) != -1) {
            outputStream.write(b, 0, len);
        }

        // 关闭文件
        outputStream.close();
        inputStream.close();
    }

}
