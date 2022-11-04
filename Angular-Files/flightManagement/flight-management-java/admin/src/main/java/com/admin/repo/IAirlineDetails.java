package com.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.entity.AirlineDetails;


public interface IAirlineDetails extends JpaRepository<AirlineDetails, Integer>{

}
