package com.oldpoint;

import javax.swing.*;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: OldPoint
 * @Date: 2019/12/4 14:44
 */
class Constants {

    /**
     * 配置文件
     */
    final static File CHANNEL_PARAMETER_CONFIGURATION = new File(new File("") + "ChannelParameterConfiguration.xml");

    final static String UTF_8 = "UTF-8";

    static List CopyFiles = new ArrayList();

    static List CopyDirs = new ArrayList();

    static Map<String, JTextField> CommonDataStringJTextFieldMap = new HashMap<>();

    static Map<String, JTextField> AloneDataStringJTextFieldMap = new HashMap<>();

    static Map<String, JTextField> AdDataStringJTextFieldMap = new HashMap<>();

}
