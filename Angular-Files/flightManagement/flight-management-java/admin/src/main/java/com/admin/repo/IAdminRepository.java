package com.admin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.admin.entity.FlightDetails;

public interface IAdminRepository extends JpaRepository<FlightDetails, Integer> {

//	@Query("select f from FlightDetails f where f.id = 55")
	@Query("select f from FlightDetails f " + 
			"where "+
			"Date(startDate) = Date(?1) "+
			" or "+
			"(flyFrom = ?2 and flyTo = ?3)"
			
		  )
	List<FlightDetails> searchFlights(String startDate, String from , String to);
}
