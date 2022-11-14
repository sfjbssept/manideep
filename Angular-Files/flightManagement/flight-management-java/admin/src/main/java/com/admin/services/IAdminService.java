package com.admin.services;

import java.util.List;

import com.admin.dto.FlightAirlineResponse;
import com.admin.dto.Join_FlightCityAirlineResponse;
import com.admin.entity.AirlineDetails;
import com.admin.entity.CityDetails;
//import com.admin.entity.CustomDto;
import com.admin.entity.FlightDetails;


public interface IAdminService {

	FlightDetails addFlight(FlightDetails flightDetails);
		
	List<FlightDetails> getAllFlights();
	
	String deleteFlight(int flightNumber);
	
	String updateFlight(FlightDetails updateFlightDetails , int flightNumber);
	
	List<CityDetails> getAllCityDetails();
	
	List<AirlineDetails> getAirlineDetails();
	
	List<Join_FlightCityAirlineResponse> searchFlight(String startDate , String from , String to);
	
	List<Join_FlightCityAirlineResponse> getMyTestDetails();
	
}
