package com.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.entity.CityDetails;

public interface ICitiesRepository extends JpaRepository<CityDetails, Integer>{

}
