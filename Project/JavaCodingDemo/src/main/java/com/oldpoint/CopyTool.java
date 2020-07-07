package com.oldpoint;

import org.apache.commons.lang.StringUtils;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import javax.swing.*;
import java.io.*;
import java.nio.charset.StandardCharsets;

/**
 * @Author: OldPoint
 * @Date: 2019/12/4 14:52
 */
class CopyTool {
    private static SAXReader reader;

    static Document getConfigurationDocument()
    {
        Document document;
        try {
            document = getXmlDocument(Constants.CHANNEL_PARAMETER_CONFIGURATION);
        } catch (DocumentException e) {
            hint("Error getting configuration file to generate new configuration file", JOptionPane.ERROR_MESSAGE);
            String s = selectPath();
            document = DocumentHelper.createDocument();
            document.addElement("Configuration").addAttribute("path", s);
            writerXml(Constants.CHANNEL_PARAMETER_CONFIGURATION, document);
        }
        return document;
    }

    static String selectPath()
    {
        String path = "";
        JFileChooser chooser = new JFileChooser();
        chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
        chooser.setDialogTitle("Specify the AndroidKiller path");
        if (JFileChooser.APPROVE_OPTION == chooser.showOpenDialog(chooser)) {
            path = chooser.getSelectedFile().getPath() + "\\projects";
        }
        return path;
    }

    /**
     * 通过SAX获取XML的Document
     * @param file  需要读取的XML
     * @return  Document
     * @throws DocumentException Document读取失败
     */
    static Document getXmlDocument(File file) throws DocumentException {
        if (reader == null) {
            reader = new SAXReader();
        }
        return reader.read(file);
    }

    /**
     * 将更改的Document添加写入到文件中
     * @param file  需要写入的XML文件
     * @param document  更改后的Document
     */
    static void writerXml(File file, Document document) {
        OutputFormat format = OutputFormat.createPrettyPrint();
        format.setEncoding(Constants.UTF_8);
        try {
            XMLWriter writer = new XMLWriter(new FileWriter(file), format);
            writer.write(document);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            hint(file + " Write Failed", JOptionPane.ERROR_MESSAGE);
        }

    }

    /**
     * 将字符串写入文件
     * @param file  写入的文件
     * @param str   内容
     */
    static void writerFileData(File file, String str)
    {
        try {
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8));
            writer.write(str);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            CopyTool.hint(file +" Write Failed", JOptionPane.ERROR_MESSAGE);
        }
    }

    /**
     * 弹窗提示
     * @param str   提示信息
     * @param jOptionPane   提示信息等级
     */
    static void hint(String str, int jOptionPane)
    {
        switch (jOptionPane)
        {
            case JOptionPane.ERROR_MESSAGE:
                JOptionPane.showMessageDialog(null, str, "error", jOptionPane);
                break;
            case JOptionPane.PLAIN_MESSAGE:
                JOptionPane.showMessageDialog(null, str, "hint", jOptionPane);
                break;
            default:
                break;
        }
    }

}
