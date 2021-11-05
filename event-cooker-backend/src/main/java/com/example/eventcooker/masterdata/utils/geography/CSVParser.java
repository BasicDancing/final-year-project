package com.example.eventcooker.masterdata.utils.geography;

import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CSVParser {

    public Object csvReader(String path) {
        List<List<String>> records = new ArrayList<>();
        String COMMA_DELIMITER = ",";
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(COMMA_DELIMITER);
                records.add(Arrays.asList(values));
            }
            return records;
        } catch (IOException ioException){
            return "File Not Found and" + ioException;
        }
    }

    public void csvProcess() {
        File appBase = new File(
                "src" +
                        "/main" +
                        "/java" +
                        "/com" +
                        "/example" +
                        "/eventcooker" +
                        "/masterdata" +
                        "/utils" +
                        "/geography" +
                        "/csv" +
                        "/divisions.csv");                 //to determine current directory
        String path = appBase.getAbsolutePath();
        System.out.println(path);
        System.out.println(csvReader(path));
    }
}
