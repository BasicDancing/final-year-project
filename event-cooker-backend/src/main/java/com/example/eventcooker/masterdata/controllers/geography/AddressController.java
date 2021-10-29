package com.example.eventcooker.masterdata.controllers.geography;

import com.example.eventcooker.masterdata.models.geography.Address;
import com.example.eventcooker.masterdata.services.geography.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/masterdata/geography/address")
public class AddressController {

    @Autowired
    private AddressService addressService;


    @PostMapping("/add")
    public @ResponseBody
    ResponseEntity<Address> saveAddress(@RequestBody Address address){
        try {
            return new ResponseEntity<>(
                    addressService.createAddress(address),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_ACCEPTABLE
            );
        }
    }

    @GetMapping("/get-all")
    public @ResponseBody ResponseEntity<List<Address>> getAddresss(){
        try {
            return new ResponseEntity<>(
                    addressService.findAddresss(),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @PutMapping("/update")
    public @ResponseBody ResponseEntity<Address> changeAddress(@RequestBody Address address){
        try {
            return new ResponseEntity<>(
                    addressService.updateAddress(address),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_MODIFIED
            );
        }
    }

    @DeleteMapping("/delete/{id}")
    public @ResponseBody ResponseEntity<String> deleteAddress(@PathVariable Long id){
        try {
            return new ResponseEntity<>(
                    addressService.deleteAddress(id),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }
}
