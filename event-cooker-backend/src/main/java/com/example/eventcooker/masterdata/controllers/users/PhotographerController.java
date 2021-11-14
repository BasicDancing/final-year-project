package com.example.eventcooker.masterdata.controllers.users;

import com.example.eventcooker.masterdata.models.geography.Address;
import com.example.eventcooker.masterdata.models.users.Photographer;
import com.example.eventcooker.masterdata.services.users.PhotographerService;
import com.example.eventcooker.masterdata.utils.geography.SerializerUtil;
import com.example.eventcooker.masterdata.utils.users.PhotographerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/masterdata/user/photographer")
public class PhotographerController {

    @Autowired
    private PhotographerService photographerService;

    @Autowired
    private PhotographerUtil photographerUtil;

    @PostMapping("/add")
    public @ResponseBody ResponseEntity<PhotographerUtil.PhotographerSerializer> savePhotographer(@RequestBody Photographer photographer){
        try {
            return new ResponseEntity<>(
                    photographerUtil.photographerSerializer(photographerService.createPhotographer(photographer)),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_ACCEPTABLE
            );
        }
    }

    @GetMapping("/get/{id}")
    public @ResponseBody ResponseEntity<PhotographerUtil.PhotographerSerializer> getPhotographer(@PathVariable Long id){
        try {
            return new ResponseEntity<>(
                    photographerUtil.photographerSerializer(photographerService.findPhotographer(id)),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @GetMapping("/get-all")
    public @ResponseBody ResponseEntity<List<PhotographerUtil.PhotographerSerializer>> getPhotographers(){
        try {
            List<PhotographerUtil.PhotographerSerializer> serializers = new ArrayList<>();
            for (Photographer photographer: photographerService.findPhotographers()){
                serializers.add(photographerUtil.photographerSerializer(photographer));
            }
            return new ResponseEntity<>(
                    serializers,
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @PutMapping("/update")
    public @ResponseBody ResponseEntity<Photographer> changePhotographer(@RequestBody Photographer photographer){
        try {
            return new ResponseEntity<>(
                    photographerService.updatePhotographer(photographer),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_MODIFIED
            );
        }
    }

    @DeleteMapping("/delete/{id}")
    public @ResponseBody ResponseEntity<String> deletePhotographer(@PathVariable Long id){
        try {
            return new ResponseEntity<>(
                    photographerService.deletePhotographer(id),
                    HttpStatus.OK
            );
        }catch (Exception e){
            return new ResponseEntity<>(
                    HttpStatus.NOT_FOUND
            );
        }
    }
}
