package com.example.eventcooker.masterdata.utils.geography;

import com.example.eventcooker.masterdata.models.geography.Address;
import com.example.eventcooker.masterdata.models.geography.District;
import com.example.eventcooker.masterdata.models.geography.Division;
import com.example.eventcooker.masterdata.models.geography.Upazila;
import lombok.*;
import org.springframework.stereotype.Service;

@Service
public class SerializerUtil {

    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    public class DivisionSerializer{
        private long id;
        private String Name;
    }

    public DivisionSerializer divisionSerializer(Division division){
        DivisionSerializer divisionResp = new DivisionSerializer();
        divisionResp.setId(division.getId());
        divisionResp.setName(division.getName());

        return divisionResp;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    public class DistrictSerializer{
        private long id;
        private String Name;
    }

    public DistrictSerializer districtSerializer(District district){
        DistrictSerializer districtResp = new DistrictSerializer();
        districtResp.setId(district.getId());
        districtResp.setName(district.getName());

        return districtResp;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    public class UpazilaSerializer{
        private long id;
        private String Name;
    }

    public UpazilaSerializer upazilaSerializer(Upazila upazila){
        UpazilaSerializer upazilaResp = new UpazilaSerializer();
        upazilaResp.setId(upazila.getId());
        upazilaResp.setName(upazila.getName());

        return upazilaResp;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    public class AddressSerializer{
        private Long id;
        private String street;
        private String postOffice;
        private String postalCode;
        private DivisionSerializer division;
        private DistrictSerializer district;
        private UpazilaSerializer upazila;
    }

    public AddressSerializer addressSerializer(Address address){
        AddressSerializer addressResp = new AddressSerializer();
        addressResp.setId(address.getId());
        addressResp.setStreet(address.getStreet());
        addressResp.setPostOffice(address.getPostOffice());
        addressResp.setPostalCode(address.getPostalCode());
        addressResp.setDivision(divisionSerializer(address.getDivision()));
        addressResp.setDistrict(districtSerializer(address.getDistrict()));
        addressResp.setUpazila(upazilaSerializer(address.getUpazila()));

        return addressResp;
    }
}
