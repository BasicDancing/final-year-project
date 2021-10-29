package com.example.eventcooker.masterdata.services.geography;

import com.example.eventcooker.masterdata.models.geography.Division;
import com.example.eventcooker.masterdata.repositories.geography.DivisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DivisionService {

    @Autowired
    private DivisionRepository divisionRepository;

    //POST
    public Division createDivision(Division division){
        return divisionRepository.save(division);
    }

    //POST ALL
    public List<Division> createDivisions(List<Division> divisions){
        return divisionRepository.saveAll(divisions);
    }

    //GET
    public Division.Serializer findDivision(Long id){
        Division division = divisionRepository.findById(id).orElse(null);
        Division.Serializer serializer = new Division.Serializer();
        assert division != null;
        return serializer.Serializaton(division);
    }

    //GET ALL
    public List<Division.Serializer> findDivisions(){
        List<Division> divisions = divisionRepository.findAll();
        List<Division.Serializer> serializers = new ArrayList<>();
        Division.Serializer serializer = new Division.Serializer();
        divisions.forEach(division -> {serializers.add(serializer.Serializaton(division));});
        return serializers;
    }

    //PUT
    public Division updateDivision(Division division){

        Division exDivision = divisionRepository.findById(division.getId()).orElse(null);

        assert exDivision != null;
        exDivision.setName(division.getName());

        return divisionRepository.save(exDivision);
    }

    //DELETE
    public String deleteDivision(Long id){
        divisionRepository.deleteById(id);
        return "Successfully deleted division which id was " + id + ":)";
    }

    //DELETE ALL
    public String deleteDivisions(){
        divisionRepository.deleteAll();
        return "Successfully deleted all division :)";
    }
}
