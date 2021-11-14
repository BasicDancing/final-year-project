package com.example.eventcooker.masterdata.utils.users;

import com.example.eventcooker.masterdata.models.geography.Address;
import com.example.eventcooker.masterdata.models.users.Photographer;
import com.example.eventcooker.masterdata.utils.geography.SerializerUtil;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Blob;
import java.sql.Date;
import java.time.Instant;

@Service
public class PhotographerUtil {

    @Autowired
    private SerializerUtil serializerUtil;

    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    public class PhotographerSerializer{
        private Long id;
        private String fullName;
        private String currentStatus;
        private String cellphone;
        private String email;
        private String nid;
        private String birthRegNo;
        private Date dateOfBirth;
        private int age;
        private String gender;
        private String nationality;
        private String bloodGroup;
        private String maritialStatus;
        private SerializerUtil.AddressSerializer permanentAddress;
        private SerializerUtil.AddressSerializer presentAddress;
        private String workPhone;
        private Blob photo;
        private Instant createdOn;
        private String createdBy;
        private Instant modifiedOn;
        private String modifiedBy;
    }

    public PhotographerSerializer photographerSerializer(Photographer photographer){
        PhotographerSerializer photographerResp = new PhotographerSerializer();
        photographerResp.setId(photographer.getId());
        photographerResp.setFullName(photographer.getFullName());
        photographerResp.setCurrentStatus(photographer.getCurrentStatus());
        photographerResp.setCellphone(photographer.getCellphone());
        photographerResp.setEmail(photographer.getEmail());
        photographerResp.setNid(photographer.getNid());
        photographerResp.setBirthRegNo(photographer.getBirthRegNo());
        photographerResp.setDateOfBirth(photographer.getDateOfBirth());
        photographerResp.setAge(photographer.getAge());
        photographerResp.setGender(photographer.getGender());
        photographerResp.setNationality(photographer.getNationality());
        photographerResp.setBloodGroup(photographer.getBloodGroup());
        photographerResp.setMaritialStatus(photographer.getMaritialStatus());
        photographerResp.setPresentAddress(serializerUtil.addressSerializer(photographer.getPresentAddress()));
        photographerResp.setPermanentAddress(serializerUtil.addressSerializer(photographer.getPermanentAddress()));
        photographerResp.setWorkPhone(photographer.getWorkPhone());
        photographerResp.setPhoto(photographer.getPhoto());
        photographerResp.setCreatedOn(photographer.getCreatedOn());
        photographerResp.setCreatedBy(photographer.getCreatedBy());
        photographerResp.setModifiedOn(photographer.getModifiedOn());
        photographerResp.setModifiedBy(photographer.getModifiedBy());

        return photographerResp;
    }

}
