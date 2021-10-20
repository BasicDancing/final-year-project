package com.example.eventcooker.masterdata.services.geography;

import com.example.eventcooker.masterdata.models.geography.Division;
import com.example.eventcooker.masterdata.repositories.geography.DivisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DivisionService {

    @Autowired
    private DivisionRepository divisionRepository;

    public Division createDivision(Division division){
        return divisionRepository.save(division);
    }
}
