package com.example.eventcooker.masterdata.utils.geography;

import com.example.eventcooker.masterdata.models.geography.District;
import com.example.eventcooker.masterdata.models.geography.Division;
import org.springframework.stereotype.Service;

@Service
public class SerializerUtil {
    public Division.Serializer Serializaton(Division division){
        Division.Serializer serializer = new Division.Serializer();
        serializer.setId(division.getId());
        serializer.setName(division.getName());
        serializer.setDistricts(division.getDistricts());
        return serializer;
    }

    public District.Serializer Serializaton(District district){
        District.Serializer serializer = new District.Serializer();
        serializer.setId(district.getId());
        serializer.setName(district.getName());
        serializer.setUpazilas(district.getUpazilas());
        return serializer;
    }
}
