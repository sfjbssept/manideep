package com.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.entity.PassengersDetails;

public interface IPassengerDetails extends JpaRepository<PassengersDetails, Integer>  {

}
