package pers.oldpoint;

import org.apache.commons.lang.StringUtils;

import java.io.*;
import java.util.*;


/**
 * 快捷获取游戏项目需要汉化的字符，IO流读取文件做字符串切割打印到控制台
 *
 * @author: OldPoint on 2019/12/18 11:58
 * @version: V1.0
 */
public class SelectString {
    public static void main(String[] args) throws IOException {
        SelectString string = new SelectString();
        File file = new File(new File("") + "string.txt");
//        string.getString(file, "unity:Text LocalizeText:: text: |");
        string.setLocalizationStyle(file, "---");
    }

    private void getText(File file) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(file));
        String str;
        while ((str = reader.readLine()) != null) {
            if (str.contains(",")) {
                String[] split = str.split(",");
                System.out.println(split[1]);
            }
        }
    }

    private void getError(File file) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(file));
        String str;
        while ((str = reader.readLine()) != null) {
            if (!str.isEmpty()) {
                if (str.contains("error")) {
                    System.err.println(str);
                } else {
                    System.out.println(str);
                }
            }
        }
    }

    private void setLocalizationStyle(File file, String split) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(file));
        String str;
        String[] strings;
        Map<String, String> map = new HashMap<>();
        while ((str = reader.readLine()) != null) {
            strings = str.split(split);
            map.put(strings[0], strings[1]);
        }
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println("cnMap.Add(\"" + entry.getKey() + "\", \"" + entry.getValue() + "\");");
        }
    }

    /**
     * 获取传入Log文件与切割的字符串，做字符串切割提取需要的Log日志，写入到当前路径下的string.txt文件。 读取或写入文件没有时会抛出读写异常
     *
     * @param file  Log文件
     * @param split 根据此字符切割
     * @return void
     * @date 2019/12/19 18:18
     */
    private void getString(File file, String split) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(file));
        String str;
        Set<String> set = new HashSet<>();
        while ((str = reader.readLine()) != null) {
            if (str.contains(split)) {
                String substring = str.substring(str.indexOf(split) + split.length());
                if (!StringUtils.isNumeric(substring)) {
                    set.add(substring);
                }
            }
        }
        reader.close();
        for (String s : set) {
            System.out.println(s);
        }

        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(new File(new File("") + "string.txt"), true)));
        for (String s : set) {
            writer.write(s + "---");
            writer.write("\r\n");
        }
        writer.close();
    }

    /**
     * 传入汉化文本切割，生成需要做TextMeshPro的汉字
     * 读取传入的文件切割每行---后的汉化字符
     *
     * @param file 汉化过的文本
     * @return void
     * @date 2019/12/19 18:24
     */
    private void getTextMeshPro(File file) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(file));
        StringBuilder builder = new StringBuilder();
        String str;
        String[] strings;
        while ((str = reader.readLine()) != null) {
            strings = str.split(",");
            if (strings.length > 1) {
                String lastString = strings[strings.length - 1];
                String needString = lastString.substring(2, lastString.length() - 1);
                needString = needString.replaceAll("[\\pP\\p{Punct}\\d+]", "");
                builder.append(needString);
            }
        }
        char[] c = builder.toString().toCharArray();
        Set<Character> set = new HashSet<>();
        for (char c1 : c) {
            set.add(c1);
        }
        for (Character character : set) {
            System.out.print(character);
        }
    }
}
