package com.example.eventcooker.masterdata.repositories.users;

import com.example.eventcooker.masterdata.models.users.Photographer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  PhotographerRepository extends JpaRepository<Photographer, Long> {

}
