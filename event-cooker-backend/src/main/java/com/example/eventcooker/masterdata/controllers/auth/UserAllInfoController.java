package com.example.eventcooker.masterdata.controllers.auth;

import com.example.eventcooker.masterdata.models.auth.UserAllInfo;
import com.example.eventcooker.masterdata.services.auth.UserAllInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/masterdata/auth/user/all/info")
public class UserAllInfoController {

    @Autowired
    private UserAllInfoService userAllInfoService;

    @PostMapping("/add")
    public @ResponseBody
    ResponseEntity<UserAllInfo> saveUserAllInfo(@RequestBody UserAllInfo userAllInfo){
        try {
            return new ResponseEntity<>(
                    userAllInfoService.createUserAllInfo(userAllInfo),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_ACCEPTABLE
            );
        }
    }

    @GetMapping("/get/id={id}")
    public @ResponseBody ResponseEntity<UserAllInfo> getUserAllInfo(@PathVariable Long id){
        try {
            return new ResponseEntity<>(
                    userAllInfoService.findUserAllInfo(id),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @GetMapping("/get/username={userName}")
    public @ResponseBody ResponseEntity<UserAllInfo> getUserAllInfoByUserName(@PathVariable String userName){
        try {
            return new ResponseEntity<>(
                    userAllInfoService.findUserAllInfoByUserName(userName),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @GetMapping("/get-all")
    public @ResponseBody ResponseEntity<List<UserAllInfo>> getUserAllInfos(){
        try {
            return new ResponseEntity<>(
                    userAllInfoService.findUserAllInfos(),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @PutMapping("/update")
    public @ResponseBody ResponseEntity<UserAllInfo> changeUserAllInfo(@RequestBody UserAllInfo userAllInfo){
        try {
            return new ResponseEntity<>(
                    userAllInfoService.updateUserAllInfo(userAllInfo),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_MODIFIED
            );
        }
    }

    @DeleteMapping("/delete/{id}")
    public @ResponseBody ResponseEntity<String> deleteUserAllInfo(@PathVariable Long id){
        try {
            return new ResponseEntity<>(
                    userAllInfoService.deleteUserAllInfo(id),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }
}
