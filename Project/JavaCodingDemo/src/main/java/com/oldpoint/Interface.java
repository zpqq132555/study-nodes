package com.oldpoint;

import org.dom4j.Document;
import org.dom4j.Element;

import javax.swing.*;
import java.awt.*;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.*;

import static com.oldpoint.CopyTool.hint;
import static com.oldpoint.CopyTool.selectPath;

/**
 * @Author: OldPoint
 * @Date: 2019/12/6 11:11
 */
public class Interface extends JFrame {

    /**
     * 列表
     */
    private JPanel commonParameter = new JPanel();
    private JPanel aloneParameter = new JPanel();
    private JPanel adParameter = new JPanel();
    /**
     * 文件与文件夹
     */
    private Map<String, JTextField> files = new HashMap<>();
    private Map<String, JTextField> dirs = new HashMap<>();
    /**
     * 添加的渠道名
     */
    private String inputChannel;
    /**
     * 有R文件的文件列表
     */
    private List<String> rFiles = new ArrayList<>();

    private Map<String, JComboBox<String>> deBugMsg = new HashMap<>();

    private JButton confirmButton;

    private int width;

    private String sm = "small";

    public static void main(String[] args) {
        Interface anInterface = new Interface();
        anInterface.startProgram();
    }

    private void startProgram()
    {
        sm = sm.replace("ll", "li");
        String name = "path";
        if (CopyTool.getConfigurationDocument().getRootElement().attribute(name).getValue().isEmpty()) {
            hint("Specify the AndroidKiller path", JOptionPane.ERROR_MESSAGE);
            String path = selectPath();
            Document configurationDocument = CopyTool.getConfigurationDocument();
            configurationDocument.getRootElement().addAttribute(name, path);
            CopyTool.writerXml(Constants.CHANNEL_PARAMETER_CONFIGURATION, configurationDocument);
            startProgram();
        } else {
            EventQueue.invokeLater(this::selectChannel);
        }
    }

    /**
     * 主窗口
     */
    private void selectChannel() {
        setFrame();
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("get off work early...");
        setLocationByPlatform(true);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    /**
     * 设置窗口基本信息
     */
    private void setFrame() {
        getContentPane().removeAll();
        width = getDimension().width / 2;
        // 设置窗口的宽高
        setSize(width, getDimension().height / 2);
        setMenu();
        refreshParameterPage();
        validate();
    }

    /**
     * 获取屏幕大小信息
     *
     * @return 屏幕信息Dimension
     */
    private Dimension getDimension() {
        return Toolkit.getDefaultToolkit().getScreenSize();
    }

    /**
     * 设置菜单信息
     */
    private void setMenu() {
        // 菜单
        JMenu channelMenu = new JMenu("Channel");
        JMenuBar menuBar = new JMenuBar();
        setJMenuBar(menuBar);

        menuBar.add(channelMenu);
        List elements = CopyTool.getConfigurationDocument().getRootElement().elements();
        for (Object o : elements) {
            Element element = (Element) o;
            JMenuItem item = new JMenuItem(element.getName());
            channelMenu.add(item);
            channelMenu.addSeparator();
            // 渠道按钮
            item.addActionListener(e -> selectTheChannel(e.getActionCommand()));
        }

        // 子菜单 => 添加渠道与删除渠道
        JMenu changeMenu = new JMenu("changeChannel");
        channelMenu.add(changeMenu);

        JMenuItem add = new JMenuItem("addChannel");
        changeMenu.add(add);
        changeMenu.addSeparator();
        // 添加渠道逻辑
        add.addActionListener(e -> addChannel());

        JMenuItem del = new JMenuItem("delChannel");
        changeMenu.add(del);
        changeMenu.addSeparator();
        // 删除渠道逻辑
        del.addActionListener(e -> delChannel());
    }

    /**
     * 设置主窗口分布信息
     */
    private void refreshParameterPage() {
        // 设置背景色
        commonParameter.setBackground(Color.gray);
        aloneParameter.setBackground(Color.gray);
        adParameter.setBackground(Color.gray);

        // 分割区域
        JSplitPane sdkParameter = addTheLayout((int) (width * 0.3), aloneParameter, adParameter);
        JSplitPane jSplitPane = addTheLayout(width / 3, commonParameter, sdkParameter);

        if (confirmButton != null) {
            // 刷新窗口后 底部按钮可能为新创建 需要重新设置布局
            setButton(confirmButton);
        }

        add(jSplitPane);
        validate();
    }

    /**
     * 划分窗口信息
     *
     * @param location        单窗口宽度
     * @param commonParameter 窗口1
     * @param sdkParameter    窗口2
     * @return 划分后的窗口JSplitPane
     */
    private JSplitPane addTheLayout(int location, Component commonParameter, Component sdkParameter) {
        JSplitPane jSplitPane = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT, false, commonParameter, sdkParameter);
        //分割线的位置  也就是初始位置
        jSplitPane.setDividerLocation(location);
        //分割线的位置  也就是初始位置
        jSplitPane.setOneTouchExpandable(false);
        //设置分割线的宽度 像素为单位
        jSplitPane.setDividerSize(2);
        //设置分割线不可拖动！！
        jSplitPane.setEnabled(false);

        return jSplitPane;
    }

    /**
     * 设置底部Button按钮布局
     *
     * @param button 需要设置的Button
     */
    private void setButton(JButton button) {
        button.setLocation(button.getWidth(), button.getHeight());
        JPanel jPanel = new JPanel();
        jPanel.add(button);
        add(jPanel, BorderLayout.PAGE_END);
    }

    /**
     * 检索配置文件里所有渠道并添加到菜单栏
     *
     * @param channel 渠道名称
     */
    private void selectTheChannel(String channel) {
        // 清空数据
        Constants.CommonDataStringJTextFieldMap.clear();
        Constants.AloneDataStringJTextFieldMap.clear();
        Constants.AdDataStringJTextFieldMap.clear();

        files.clear();
        dirs.clear();
        rFiles.clear();

        confirmButton = new JButton("copy");
        // 刷新界面
        refreshParameter();
        // copy按钮事件处理
        confirmButton.addActionListener(e -> {
            // 检查基本数据是否为空
            for (Map.Entry<String, JTextField> entry : Constants.CommonDataStringJTextFieldMap.entrySet()) {
                if ("UMenKey".equals(entry.getValue().getText())) {
                    continue;
                }
                if (entry.getValue().getText().isEmpty()) {
                    // 为空弹出警告不错任何处理
                    hint("The Common data cannot be null", JOptionPane.ERROR_MESSAGE);
                    return;
                }
            }
            // debug比较特殊
            for (Map.Entry<String, JComboBox<String>> entry : deBugMsg.entrySet()) {
                Constants.CommonDataStringJTextFieldMap.put(entry.getKey(), new JTextField((String) entry.getValue().getSelectedItem()));
            }
            // 基本数据不为空开始处理数据准备拷贝
            identifyCopyResources(channel);
        });

        // 绘制数据输入窗口
        addParameter(channel, "CommonParameter", Constants.CommonDataStringJTextFieldMap, commonParameter);
        addParameter(channel, "AloneParameter", Constants.AloneDataStringJTextFieldMap, aloneParameter);
        addParameter(channel, "AdParameter", Constants.AdDataStringJTextFieldMap, adParameter);
        // 更新界面
        validate();
    }

    /**
     * 刷新界面
     */
    private void refreshParameter() {
        // 清空主窗口上三个分页所有信息
        commonParameter.removeAll();
        aloneParameter.removeAll();
        adParameter.removeAll();
        // 重新绘制窗口
        setFrame();
    }

    /**
     * @param channel       渠道名
     * @param parameterName 渠道需要的数据父节点名称
     * @param map           保存数据的map
     * @param jPanel        添加进哪个界面
     */
    private void addParameter(String channel, String parameterName, Map<String, JTextField> map, JPanel jPanel) {
        // 渠道所有参数数据的父节点
        Element parameter = CopyTool.getConfigurationDocument().getRootElement().element(channel).element("Parameter");

        // 数据集合
        List commonList = parameter.element(parameterName).elements();
        // 数据视图格式
        JPanel commonPanel = new JPanel(new GridLayout(commonList.size(), 2));

        for (Object o : commonList) {
            Element element = (Element) o;
            JPanel panel = new JPanel(new GridLayout(1, 2));
            JLabel label = new JLabel(element.getText() + ": ", SwingConstants.RIGHT);
            panel.add(label);
            if ("deBug".equals(element.getText())) {
                JComboBox<String> comboBox = new JComboBox<>(new String[]{"true", "false"});
                panel.add(comboBox);
                deBugMsg.put(element.getText(), comboBox);
            } else {
                JTextField textField;
                if ("version".equals(element.getText())) {
                    textField = new JTextField("1");
                } else {
                    textField = new JTextField(10);
                }
                map.put(element.getText(), textField);
                panel.add(textField);
            }
            commonPanel.add(panel);
        }
        jPanel.add(commonPanel);
    }

    /**
     * 确定拷贝文件处理
     *
     * @param channel 拷贝渠道名称
     */
    private void identifyCopyResources(String channel) {
        // 弹出选择需要加入渠道的文件夹
        String path = "path";
        JFileChooser chooser = new JFileChooser(CopyTool.getConfigurationDocument().getRootElement().attribute(path).getValue());
        chooser.setDialogTitle("Select the project");
        chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
        if (JFileChooser.APPROVE_OPTION == chooser.showOpenDialog(chooser)) {
            // 开始拷贝文件
            new CopySdkForProject().determineTheCopy(chooser.getSelectedFile().getPath(), channel);
            hint("Copy the end", JOptionPane.PLAIN_MESSAGE);
        }
    }


    /**
     * 添加渠道按钮点击事件
     */
    private void addChannel() {
        // 输入的渠道名称 不能重复不能为空
        inputChannel = JOptionPane.showInputDialog("ChannelName:");
        // 为空或输入的渠道已经有了弹出警告
        if (null != CopyTool.getConfigurationDocument().getRootElement().element(inputChannel) || inputChannel.isEmpty()) {
            hint("Please enter the correct channel name that is not available!", JOptionPane.ERROR_MESSAGE);
        } else {
            // 添加渠道必须要有的默认参数
            dirs.put("\\Project\\" + sm, null);
            dirs.put("\\Project\\assets", null);
            dirs.put("\\Project\\lib", null);

            Constants.CommonDataStringJTextFieldMap.put("version", null);
            Constants.CommonDataStringJTextFieldMap.put("packageName", null);
            Constants.CommonDataStringJTextFieldMap.put("deBug", null);
            // 为OPPO渠道预留的AndroidManifest文件里的参数可以为空
            Constants.AloneDataStringJTextFieldMap.put("app_key", null);

            // 添加渠道参数数据
            addChannelParameter();
            // 渠道参数数据添加完成按钮
            confirmButton = new JButton("addModel");
            // 完成后开始添加需要拷贝的文件与文件夹
            confirmButton.addActionListener(e -> showFilesAndDirs());
            setFrame();
        }
    }

    /**
     * 添加渠道需要的参数
     */
    private void addChannelParameter() {

        refreshParameter();
        // 主页面三个分页窗口分别展示需要哪个数据

        // 第一页为默认参数，与SDK数据无关
        selectMap(Constants.CommonDataStringJTextFieldMap, commonParameter, "commonParameter");
        // 第二页为单机SDK参数，与广告SDK无关
        selectMap(Constants.AloneDataStringJTextFieldMap, aloneParameter, "aloneParameter");
        // 第三页为广告SDK参数，与单机SDK无关
        selectMap(Constants.AdDataStringJTextFieldMap, adParameter, "adParameter");
    }

    /**
     * 在分页上展示数据
     *
     * @param dataMap   数据来源
     * @param parameter 添加到哪个分页
     * @param header    数据信息说明
     */
    private void selectMap(Map<String, JTextField> dataMap, JPanel parameter, String header) {
        JPanel panel = new JPanel(new GridLayout(dataMap.size() + 1, 1));
        // 设置边框 添加分组数据信息说明
        panel.setBorder(BorderFactory.createTitledBorder(header));
        //  默认不可更改的参数放到前面 不提供删除按钮
        for (Map.Entry<String, JTextField> entry : dataMap.entrySet()) {
            if ("version".equals(entry.getKey()) || "packageName".equals(entry.getKey()) || "app_key".equals(entry.getKey()) || "deBug".equals(entry.getKey())) {
                JPanel jPanel = new JPanel(new GridLayout(1, 1));
                JLabel jLabel = new JLabel(entry.getKey());
                jPanel.add(jLabel);
                panel.add(jPanel);
            }
        }
        for (Map.Entry<String, JTextField> entry : dataMap.entrySet()) {
            // 默认不可更改的参数已添加 跳过
            if ("version".equals(entry.getKey()) || "packageName".equals(entry.getKey()) || "app_key".equals(entry.getKey()) || "deBug".equals(entry.getKey())) {
                continue;
            }
            JPanel jPanel = new JPanel(new GridLayout(1, 2));
            JLabel jLabel = new JLabel(entry.getKey());
            // 删除数据按钮
            JButton delButton = new JButton("del");
            delButton.addActionListener(e -> {
                dataMap.remove(entry.getKey());
                refreshParameter();
                addChannelParameter();
                validate();
            });
            jPanel.add(jLabel);
            jPanel.add(delButton);

            panel.add(jPanel);
        }
        // 添加数据框和按钮
        JPanel addButtonPanel = new JPanel(new GridLayout(1, 2));
        JTextField textField = new JTextField(10);
        JButton addButton = new JButton("add");
        addButton.addActionListener(e -> addData(textField.getText(), dataMap));

        addButtonPanel.add(textField);
        addButtonPanel.add(addButton);
        panel.add(addButtonPanel);

        parameter.add(panel);
    }

    /**
     * 添加参数按钮处理
     *
     * @param data 参数
     * @param map  哪个参数
     */
    private void addData(String data, Map<String, JTextField> map) {
        if (!map.containsKey(data) && null != data) {
            map.put(data, null);
        } else {
            hint(data + " already exist", JOptionPane.ERROR_MESSAGE);
        }
        refreshParameter();
        addChannelParameter();
        validate();
    }

    /**
     * 展示需要拷贝的文件与文件件
     */
    private void showFilesAndDirs() {
        // 删除所有布局信息 重新布局
        getContentPane().removeAll();
        width = getDimension().width / 2;
        setSize(width, getDimension().height / 2);
        setMenu();

        aloneParameter.removeAll();
        adParameter.removeAll();
        // 设置展示的文件与文件件信息
        selectSetStringPath(files, aloneParameter, "Files");
        selectSetStringPath(dirs, adParameter, "Dirs");

        confirmButton = new JButton("SureToAdd");
        confirmButton.addActionListener(e -> displaysTheSecondFrame());
        setButton(confirmButton);

        // 分割两个界面
        JSplitPane jSplitPane = addTheLayout(width / 2, aloneParameter, adParameter);
        add(jSplitPane);
        // 刷新界面
        validate();
    }

    /**
     * 添加渠道需要拷贝的文件或目录信息
     *
     * @param map            信息来源
     * @param panelParameter 要添加的分页
     */
    private void selectSetStringPath(Map<String, JTextField> map, JPanel panelParameter, String header) {

        JPanel jPanel = new JPanel(new GridLayout(map.size() + 1, 1));
        // 设置边框 添加分组数据信息说明
        jPanel.setBorder(BorderFactory.createTitledBorder(header));

        String str = "\\Project\\" + sm;

        //  默认不可更改的参数放到前面 不提供删除按钮
        for (Map.Entry<String, JTextField> entry : map.entrySet()) {
            if (str.equals(entry.getKey()) || "\\Project\\assets".equals(entry.getKey()) || "\\Project\\lib".equals(entry.getKey())) {
                JPanel panel = new JPanel(new GridLayout(1, 1));
                JLabel jLabel = new JLabel(entry.getKey());
                panel.add(jLabel);
                jPanel.add(panel);
            }
        }

        for (Map.Entry<String, JTextField> entry : map.entrySet()) {
            // 默认不可更改的参数已添加 跳过
            if (str.equals(entry.getKey()) || "\\Project\\assets".equals(entry.getKey()) || "\\Project\\lib".equals(entry.getKey())) {
                continue;
            }
            JPanel panel = new JPanel(new GridLayout(1, 2));
            JLabel jLabel = new JLabel(entry.getKey() + " ");
            JButton delButton = new JButton("del");
            // 删除按钮点击事件
            delButton.addActionListener(e -> {
                map.remove(entry.getKey());
                showFilesAndDirs();
            });
            panel.add(jLabel);
            panel.add(delButton);
            jPanel.add(panel);
        }

        JPanel buttonPanel = new JPanel(new GridLayout(1, 1));
        JButton addButton = new JButton("add");
        // 添加按钮点击事件
        addButton.addActionListener(e -> creatSelectFileOrDisWindows(map));

        buttonPanel.add(addButton);
        jPanel.add(buttonPanel);

        panelParameter.add(jPanel);

    }

    /**
     * 文件与文件夹添加按钮事件处理
     *
     * @param map 文件或文件夹数据
     */
    private void creatSelectFileOrDisWindows(Map<String, JTextField> map) {
        JFileChooser chooser;
        String path = "path";
        if (CopyTool.getConfigurationDocument().getRootElement().attribute(path).getValue().isEmpty()) {
            chooser = new JFileChooser();
        } else {
            path = CopyTool.getConfigurationDocument().getRootElement().attribute(path).getValue() + "\\" + inputChannel;
            chooser = new JFileChooser(new File(path + "\\Project"));
        }
        if (map == files) {
            chooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
        }
        if (map == dirs) {
            chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
        }
        if (JFileChooser.APPROVE_OPTION == chooser.showOpenDialog(chooser)) {
            path = chooser.getSelectedFile().getPath().substring(path.length());
        }
        map.put(path, null);
        showFilesAndDirs();
    }

    /**
     * 创建新JFrame界面获取原项目生成的R文件目录
     * 模板中用于继承原项目启动入口的Activity
     */
    private void displaysTheSecondFrame() {
        // 将原先的JFrame设置不可点击防止误触
        this.setEnabled(false);
        // 获取模板R文件目录
        String project = "\\Project";
        String path = CopyTool.getConfigurationDocument().getRootElement().attribute("path").getValue() + "\\" + inputChannel + project;
        rToSelect(path + "\\" + sm + "\\com");

        for (int i = 0; i < rFiles.size(); i++) {
            rFiles.set(i, rFiles.get(i).replace(path, project));
        }

        JFrame jFrame = new JFrame();
        jFrame.setSize(400, 200);
        jFrame.setLocationRelativeTo(null);
        jFrame.setTitle("Set R file and StartActivityName");

        String manager = "adManager";

        JPanel jPanel = new JPanel(new GridLayout(1, 2));
        JLabel label = new JLabel("Input StartActivityName: ", SwingConstants.RIGHT);
        JTextField jTextField = new JTextField("com." + manager + ".MainActivity");
        jPanel.add(label);
        jPanel.add(jTextField);

        ButtonGroup group = new ButtonGroup();
        JPanel panel = new JPanel(new GridLayout(rFiles.size(), 1));
        List<JRadioButton> list = new ArrayList<>();
        // 设置边框
        panel.setBorder(BorderFactory.createTitledBorder("Determine the R file directory:"));
        for (String rFile : rFiles) {
            JRadioButton radioButton = new JRadioButton(rFile);
            group.add(radioButton);
            list.add(radioButton);
            panel.add(radioButton, SwingConstants.HORIZONTAL);
        }

        JPanel panel1 = new JPanel();
        panel1.add(panel);
        panel1.add(jPanel);

        jFrame.add(panel1);

        JButton button = new JButton("confirm");
        button.setLocation(button.getWidth(), button.getHeight());
        // 提交按钮逻辑
        button.addActionListener(e -> {
            String rFileName = "R." + sm;
            for (JRadioButton radioButton : list) {
                if (radioButton.isSelected()) {
                    String r = radioButton.getText().replace("\\" + rFileName, "");
                    jFrame.dispose();
                    this.setEnabled(true);
                    confirmChannelParameterConfiguration(r, jTextField.getText());
                    return;
                }
            }
            hint("Please determine the R file directory", JOptionPane.ERROR_MESSAGE);
        });

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(button);

        jFrame.add(buttonPanel, BorderLayout.PAGE_END);

        jFrame.addWindowListener(windowListener);

        jFrame.setVisible(true);
    }

    private WindowListener windowListener = new WindowListener() {
        @Override
        public void windowOpened(WindowEvent windowEvent) {

        }

        @Override
        public void windowClosing(WindowEvent windowEvent) {
            rFiles.clear();
            setEnabled(true);
        }

        @Override
        public void windowClosed(WindowEvent windowEvent) {

        }

        @Override
        public void windowIconified(WindowEvent windowEvent) {

        }

        @Override
        public void windowDeiconified(WindowEvent windowEvent) {

        }

        @Override
        public void windowActivated(WindowEvent windowEvent) {

        }

        @Override
        public void windowDeactivated(WindowEvent windowEvent) {

        }
    };

    /**
     * 查找模板中所有的包含R文件的目录
     * SDK文件也会包含R文件，但也需要拷贝进项目
     *
     * @param path 查找的文件路径
     */
    private void rToSelect(String path) {
        File[] files = new File(path).listFiles();
        String rFileName = "R." + sm;
        assert files != null;
        for (File file : files) {
            // 如果是R文件就添加数组
            if (rFileName.equals(file.getName())) {
                try {
                    rFiles.add(file.getCanonicalFile().toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (file.isDirectory()) {
                rToSelect(path + File.separator + file.getName());
            }
        }
    }

    /**
     * 添加渠道配置文件
     *
     * @param r            R文件相对路径
     * @param jumpActivity 继承项目启动入口的Activity
     */
    private void confirmChannelParameterConfiguration(String r, String jumpActivity) {
        // 获取配置文件的主节点添加 渠道节点
        Document configurationDocument = CopyTool.getConfigurationDocument();
        Element channel = configurationDocument.getRootElement().addElement(inputChannel).addAttribute("startActivityName", jumpActivity);

        // 添加渠道参数节点与子节点
        Element parameter = channel.addElement("Parameter");
        setElementData(parameter, Constants.CommonDataStringJTextFieldMap, "CommonParameter", "CommonData");
        setElementData(parameter, Constants.AloneDataStringJTextFieldMap, "AloneParameter", "AloneData");
        setElementData(parameter, Constants.AdDataStringJTextFieldMap, "AdParameter", "AdData");

        // 添加渠道拷贝相对路径
        Element copyPath = channel.addElement("CopyPath").addAttribute("R", r);
        setElementData(copyPath, files, "PathFiles", "File");
        setElementData(copyPath, dirs, "PathDirs", "Dir");

        // 写入配置
        CopyTool.writerXml(Constants.CHANNEL_PARAMETER_CONFIGURATION, configurationDocument);
        this.setEnabled(true);
        // 写入配置后展示拷贝这个渠道的默认界面
        selectTheChannel(inputChannel);
    }

    /**
     * 设置渠道节点数据
     *
     * @param parameter    节点
     * @param map          数据
     * @param strParameter 子节点
     * @param elementName  子节点中的节点名称
     */
    private void setElementData(Element parameter, Map<String, JTextField> map, String strParameter, String elementName) {
        Element commonParameter = parameter.addElement(strParameter);
        for (Map.Entry<String, JTextField> entry : map.entrySet()) {
            if ("version".equals(entry.getKey())) {
                Element apkTool = commonParameter.addElement("apkTool");
                apkTool.addAttribute("minSdkVersion", "16");
                apkTool.addAttribute("targetSdkVersion", "26");
                apkTool.addAttribute("versionCode", "100");
                apkTool.addAttribute("versionName", "1.0.0");
                apkTool.setText(entry.getKey());
                continue;
            }
            commonParameter.addElement(elementName).setText(entry.getKey());
        }

    }

    private void delChannel() {
        Document configurationDocument = CopyTool.getConfigurationDocument();
        Element rootElement = configurationDocument.getRootElement();
        List elements = rootElement.elements();
        Object[] obj = new Object[elements.size()];
        for (int i = 0; i < elements.size(); i++) {
            obj[i] = ((Element) elements.get(i)).getName();
        }
        String s = (String) JOptionPane.showInputDialog(null, "delChannel:\n", "del", JOptionPane.PLAIN_MESSAGE, new ImageIcon("icon.png"), obj, "");
        if (s != null) {
            rootElement.remove(rootElement.element(s));
            CopyTool.writerXml(Constants.CHANNEL_PARAMETER_CONFIGURATION, configurationDocument);
        }
        refreshParameter();
    }

}
