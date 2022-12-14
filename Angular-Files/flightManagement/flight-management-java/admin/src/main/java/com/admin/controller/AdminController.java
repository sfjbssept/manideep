package com.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.admin.dto.BookFlightPayload;
import com.admin.dto.Join_FlightCityAirlineResponse;
import com.admin.dto.SearchPayload;
import com.admin.dto.SearchResponse;
import com.admin.entity.AirlineDetails;
import com.admin.entity.CityDetails;
//import com.admin.entity.CustomDto;
import com.admin.entity.FlightDetails;
import com.admin.services.IAdminService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	@Autowired
	IAdminService adminService;
	
	@PostMapping("/addFlight")
	public FlightDetails addFlight(@RequestBody FlightDetails flightDetails) {
		System.out.println("reached..service");
		return adminService.addFlight(flightDetails);
	}
	
	@GetMapping("/getAllFlights")
	public List<FlightDetails> getAllFlights() {
		return adminService.getAllFlights();
	}
	@DeleteMapping("/deleteFlight/{flightNumber}")
	public String deleteFlight(@PathVariable int flightNumber) {
		return adminService.deleteFlight(flightNumber);
	}
	@PutMapping("/update/{flightNumber}")
	public String updateFlightDetails(@RequestBody FlightDetails flightDetails , @PathVariable int flightNumber) {
		return adminService.updateFlight(flightDetails, flightNumber);
	}
	
	@GetMapping("/getCities")
	public List<CityDetails> getCities() {
		return adminService.getAllCityDetails();
	}
	
	@GetMapping("/airlineDetails")
	public List<AirlineDetails> getAirlineDetails() {
		return adminService.getAirlineDetails();
	}
	
	@PostMapping("/searchFlight")
	public SearchResponse searchFlight(@RequestBody SearchPayload searchPayload) {
		return adminService.searchFlight(searchPayload.getReturnDate() , searchPayload.getStartDate() , 
				searchPayload.getFlyFrom() , searchPayload.getFlyTo() , searchPayload.getClassType(),
				searchPayload.getNoOfAdults());
	}
	
	
	@GetMapping("/getFlightsWithAirlineName")
	public List<Join_FlightCityAirlineResponse> getMyTestDetails() {
		return adminService.getMyTestDetails();
	}
	
	@PostMapping("/flight/booking")
	public String bookFlight(@RequestBody BookFlightPayload bookFlightPayload) {
		//returns PNR number
		return adminService.bookFlight(bookFlightPayload);
	}

	//testing
	@GetMapping("/working")
	public String working() {
		return "admin working...";
	}
	
	//testing eureka server functionality
	@PostMapping("/callFromUserToAdmin")
	public String adminTest(@RequestBody String requestJson) {
		return "value passed from user service : "+requestJson;
	}
	
	
	
}
