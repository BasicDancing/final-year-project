package com.example.eventcooker.masterdata.services.geography;

import com.example.eventcooker.masterdata.models.geography.Address;
import com.example.eventcooker.masterdata.repositories.geography.AddressRepository;
import com.example.eventcooker.masterdata.utils.geography.AddressUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AddressUtil addressUtil;

    //POST
    public Address createAddress(Address address){
        addressUtil.placeFind(address);
        return addressRepository.save(address);
        //return address;
    }

    //GET ALL
    public List<Address> findAddresss(){
        return addressRepository.findAll();
    }

    //PUT
    public Address updateAddress(Address address){

        Address exAddress = addressRepository.findById(address.getId()).orElse(null);

        assert exAddress != null;
        exAddress.setStreet(address.getStreet());
        exAddress.setPostOffice(address.getPostOffice());
        exAddress.setPostalCode(address.getPostalCode());

        addressUtil.placeFind(address);

        exAddress.setDivision(address.getDivision());
        exAddress.setDistrict(address.getDistrict());
        exAddress.setUpazila(address.getUpazila());

        return addressRepository.save(exAddress);
        //return exAddress;
    }

    //DELETE
    public String deleteAddress(Long id){
        addressRepository.deleteById(id);
        return "Successfully deleted Address which id was " + id + ":)";
    }
}
