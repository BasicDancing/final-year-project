package com.example.eventcooker.masterdata.services.users;

import com.example.eventcooker.masterdata.models.users.Photographer;
import com.example.eventcooker.masterdata.repositories.users.PhotographerRepository;
import com.example.eventcooker.masterdata.services.geography.AddressService;
import com.example.eventcooker.masterdata.utils.AgeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class PhotographerService {

    @Autowired
    private PhotographerRepository photographerRepository;

    @Autowired
    private AddressService addressService;

    @Autowired
    private AgeConverter ageConverter;

    //GET
    public Photographer findPhotographer(Long id){
        return photographerRepository.findById(id).orElse(null);
    }

    //GET ALL
    public List<Photographer> findPhotographers(){
        return photographerRepository.findAll();
    }

    //PUT
    public Photographer updatePhotographer(Photographer photographer){

        Photographer exPhotographer = photographerRepository.findById(photographer.getId()).orElse(null);

        assert exPhotographer != null;
        exPhotographer.setProfession(photographer.getProfession());
        exPhotographer.setFullName(photographer.getFullName());
        exPhotographer.setCurrentStatus(photographer.getCurrentStatus());
        exPhotographer.setCellphone(photographer.getCellphone());
        exPhotographer.setEmail(photographer.getEmail());
        exPhotographer.setNid(photographer.getNid());
        exPhotographer.setBirthRegNo(photographer.getBirthRegNo());
        exPhotographer.setDateOfBirth(photographer.getDateOfBirth());
        exPhotographer.setAge(ageConverter.age(photographer.getDateOfBirth()));
        exPhotographer.setGender(photographer.getGender());
        exPhotographer.setNationality(photographer.getNationality());
        exPhotographer.setBloodGroup(photographer.getBloodGroup());
        exPhotographer.setMaritialStatus(photographer.getMaritialStatus());
        exPhotographer.setPresentAddress(addressService.createAddress(photographer.getPresentAddress()));
        exPhotographer.setPermanentAddress(addressService.createAddress(photographer.getPermanentAddress()));
        exPhotographer.setWorkPhone(photographer.getWorkPhone());
        exPhotographer.setPhoto(photographer.getPhoto());
        exPhotographer.setModifiedOn(Instant.now());
        exPhotographer.setModifiedBy(photographer.getModifiedBy());

        return photographerRepository.save(exPhotographer);
    }

    //DELETE
    public String deletePhotographer(Long id){
        photographerRepository.deleteById(id);
        return "Successfully deleted Photographer which id was " + id + ":)";
    }
}
