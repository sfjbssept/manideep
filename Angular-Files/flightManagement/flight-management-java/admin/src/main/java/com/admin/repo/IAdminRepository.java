package com.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.entity.FlightDetails;

public interface IAdminRepository extends JpaRepository<FlightDetails, Integer>{

}
