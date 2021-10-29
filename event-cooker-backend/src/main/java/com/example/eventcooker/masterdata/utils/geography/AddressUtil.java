package com.example.eventcooker.masterdata.utils.geography;

import com.example.eventcooker.masterdata.models.geography.Address;
import com.example.eventcooker.masterdata.repositories.geography.DistrictRepository;
import com.example.eventcooker.masterdata.repositories.geography.DivisionRepository;
import com.example.eventcooker.masterdata.repositories.geography.UpazilaRepository;
import com.example.eventcooker.masterdata.services.geography.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressUtil {

    @Autowired
    private DivisionRepository divisionRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private UpazilaRepository upazilaRepository;

    public void placeFind(Address address){
        address.setDivision(divisionRepository.findById(address.getDivision().getId()).orElse(null));
        address.setDistrict(districtRepository.findById(address.getDistrict().getId()).orElse(null));
        address.setUpazila(upazilaRepository.findById(address.getUpazila().getId()).orElse(null));
    }
}
