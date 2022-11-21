package com.admin.services;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.dto.SearchPayload;
import com.admin.dto.SearchResponse;
import com.admin.dto.BookFlightPayload;
import com.admin.dto.Join_FlightCityAirlineResponse;
import com.admin.entity.AirlineDetails;
import com.admin.entity.BookingDetails;
import com.admin.entity.CityDetails;
//import com.admin.entity.CustomDto;
import com.admin.entity.FlightDetails;
import com.admin.entity.PassengersDetails;
import com.admin.repo.IAdminRepository;
import com.admin.repo.IAirlineDetails;
import com.admin.repo.IBookingDetailsRepo;
import com.admin.repo.ICitiesRepository;
import com.admin.repo.IPassengerDetails;

@Service
public class AdminServiceImpl implements IAdminService{

	@Autowired
	IAdminRepository adminRepository;
	
	@Autowired
	ICitiesRepository citiesRepository;
	
	@Autowired
	IAirlineDetails airLineDetails;
	
	@Autowired
	IBookingDetailsRepo bookingRepo;
	
	@Autowired
	IPassengerDetails passengerDetails;
	
	@Override
	public FlightDetails addFlight(FlightDetails flightDetails) {
		return adminRepository.save(flightDetails);
	}

	@Override
	public List<FlightDetails> getAllFlights() {
		return  adminRepository.findAll();
	}

	@Override
	public String deleteFlight(int flightNumber) {
		boolean found = false;
		List<FlightDetails> fullData = adminRepository.findAll();
		for (FlightDetails flightDetails : fullData) {
			if(flightDetails.getFlightNumber() == flightNumber) {
				found = true;
				adminRepository.deleteById(flightDetails.getId());
				break;
			}
		}
		return (found == true) ? "Successfully Deleted !" : "Flight Number '"+flightNumber+"' Found";
	}

	@Override
	public String updateFlight(FlightDetails updateFlightDetails, int flightNumber) {
		boolean found = false;
		List<FlightDetails> fullData = adminRepository.findAll();
		for (FlightDetails flightDetails : fullData) {
			if(flightDetails.getFlightNumber() == flightNumber) {
				found = true;
//				FlightDetails updateRepo = adminRepository.findById(flightDetails.getId()).orElseThrow();
				flightDetails.setAirlineId(updateFlightDetails.getAirlineId());
				flightDetails.setFlyFrom(updateFlightDetails.getFlyFrom());
				flightDetails.setFlyTo(updateFlightDetails.getFlyTo());
				flightDetails.setStartDate(updateFlightDetails.getStartDate());
				flightDetails.setEndDate(updateFlightDetails.getEndDate());
				flightDetails.setStops(updateFlightDetails.getStops());
				flightDetails.setClassType(updateFlightDetails.getClassType());
				flightDetails.setAvailableSeats(updateFlightDetails.getAvailableSeats());
				flightDetails.setTicketCost(updateFlightDetails.getTicketCost());
				flightDetails.setMeal(updateFlightDetails.getMeal());
				flightDetails.setCabinBag(updateFlightDetails.getCabinBag());
				flightDetails.setCheckIn(updateFlightDetails.getCheckIn());
				
				adminRepository.save(flightDetails);
				break;
			}
		}
		return (found == true) ? "Successfully Updated !" : "Flight Number '"+flightNumber+"' Found";
	}

	@Override
	public SearchResponse searchFlight(String returnDate , String startDate , String from , String to ,
			String classType, int noOfAdults) {
		List<Join_FlightCityAirlineResponse> startDateSearchResp = adminRepository.searchFlights(startDate , from , to ,
				classType , noOfAdults
				);
		List<Join_FlightCityAirlineResponse> returnDateSearchResp = adminRepository.searchFlights(returnDate, to, from ,
				classType , noOfAdults);
		return new SearchResponse(startDateSearchResp, returnDateSearchResp);
	}

	@Override
	public List<CityDetails> getAllCityDetails() {
		return citiesRepository.findAll();
	}

	@Override
	public List<AirlineDetails> getAirlineDetails() {
		return airLineDetails.findAll();
	}

	@Override
	public List<Join_FlightCityAirlineResponse> getMyTestDetails() {
		return adminRepository.getJoinFLightCityAirline();
	}

	@Override
	public String bookFlight(BookFlightPayload bookFlightPayload) {
		
		BookingDetails bookingDetails = new BookingDetails();
		bookingDetails.setContactMailid(bookFlightPayload.getContactMailid());
		bookingDetails.setContactMobileNumber(bookFlightPayload.getContactMobileNumber());
		bookingDetails.setTotalCost(bookFlightPayload.getTotalCost());
		bookingDetails.setBookedDate(new Date());
		bookingRepo.save(bookingDetails);
		
		List<PassengersDetails> passengersList = bookFlightPayload.getPassengersDetails();
		for (PassengersDetails passengersDetailsObj : passengersList) {
			passengerDetails.save(passengersDetailsObj);
		}

		return "demo success";
	}

}
