package com.example.eventcooker.masterdata.utils.auth;

import com.example.eventcooker.masterdata.models.auth.UserAllInfo;
import com.example.eventcooker.masterdata.models.users.Photographer;
import com.example.eventcooker.masterdata.repositories.users.PhotographerRepository;
import com.example.eventcooker.masterdata.services.geography.AddressService;
import com.example.eventcooker.masterdata.utils.AgeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Objects;

@Service
public class UserAllInfoUtil {

    @Autowired
    private PhotographerRepository photographerRepository;

    @Autowired
    private AddressService addressService;

    @Autowired
    private AgeConverter ageConverter;

    //POST
    public Photographer createPhotographer(Photographer photographer){
        photographer.setPresentAddress(addressService.createAddress(photographer.getPresentAddress()));
        photographer.setPermanentAddress(addressService.createAddress(photographer.getPermanentAddress()));
        photographer.setAge(ageConverter.age(photographer.getDateOfBirth()));
        photographer.setCreatedOn(Instant.now());
        return photographerRepository.save(photographer);
    }

    public void professionChecking(UserAllInfo userAllInfo){
        if(Objects.equals(userAllInfo.getProfession(), "Photographer")){
            Photographer photographer = new Photographer();
            photographer.setProfession(userAllInfo.getProfession());
            photographer.setFullName(userAllInfo.getFullName());
            photographer.setEmail(userAllInfo.getEmail());
            userAllInfo.setUserId(createPhotographer(photographer).getId());
        }
    }
}
