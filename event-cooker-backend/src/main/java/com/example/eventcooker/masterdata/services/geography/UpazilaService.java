package com.example.eventcooker.masterdata.services.geography;

import com.example.eventcooker.masterdata.models.geography.Upazila;
import com.example.eventcooker.masterdata.repositories.geography.UpazilaRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UpazilaService {

    @Autowired
    private UpazilaRepository upazilaRepository;

    public Upazila createUpazila(Upazila upazila){
        return upazilaRepository.save(upazila);
    }
}
