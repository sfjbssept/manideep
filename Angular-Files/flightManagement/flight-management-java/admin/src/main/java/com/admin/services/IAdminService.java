package com.admin.services;

import java.util.List;

import com.admin.entity.AirlineDetails;
import com.admin.entity.CityDetails;
import com.admin.entity.FlightDetails;


public interface IAdminService {

	FlightDetails addFlight(FlightDetails flightDetails);
		
	List<FlightDetails> getAllFlights();
	
	String deleteFlight(int flightNumber);
	
	String updateFlight(FlightDetails updateFlightDetails , int flightNumber);
	
	List<CityDetails> getAllCityDetails();
	
	List<AirlineDetails> getAirlineDetails();
	
	List<FlightDetails> getFlightDetailsUsingJPQL(String startDate , String from , String to);
	
}
