package com.admin.services;

import java.security.SecureRandom;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Random;

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
public class AdminServiceImpl implements IAdminService {

	@Autowired
	IAdminRepository adminRepository;

	@Autowired
	ICitiesRepository citiesRepository;

	@Autowired
	IAirlineDetails airLineDetails;

	@Autowired
	IBookingDetailsRepo bookingRepo;

	@Autowired
	IPassengerDetails passengerDetailsRepo;

	@Override
	public FlightDetails addFlight(FlightDetails flightDetails) {
		return adminRepository.save(flightDetails);
	}

	@Override
	public List<FlightDetails> getAllFlights() {
		return adminRepository.findAll();
	}

	@Override
	public String deleteFlight(int flightNumber) {
		boolean found = false;
		List<FlightDetails> fullData = adminRepository.findAll();
		for (FlightDetails flightDetails : fullData) {
			if (flightDetails.getFlightNumber() == flightNumber) {
				found = true;
				adminRepository.deleteById(flightDetails.getId());
				break;
			}
		}
		return (found == true) ? "Successfully Deleted !" : "Flight Number '" + flightNumber + "' Found";
	}

	@Override
	public String updateFlight(FlightDetails updateFlightDetails, int flightNumber) {
		boolean found = false;
		List<FlightDetails> fullData = adminRepository.findAll();
		for (FlightDetails flightDetails : fullData) {
			if (flightDetails.getFlightNumber() == flightNumber) {
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
		return (found == true) ? "Successfully Updated !" : "Flight Number '" + flightNumber + "' Found";
	}

	@Override
	public SearchResponse searchFlight(String returnDate, String startDate, String from, String to, String classType,
			int noOfAdults) {
		List<Join_FlightCityAirlineResponse> startDateSearchResp = adminRepository.searchFlights(startDate, from, to,
				classType, noOfAdults);
		List<Join_FlightCityAirlineResponse> returnDateSearchResp = adminRepository.searchFlights(returnDate, to, from,
				classType, noOfAdults);
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

	public String randomString(int len, SecureRandom rnd, String stringAlpha, String stringNumeric) {
		StringBuilder sb = new StringBuilder(len);
		for (int i = 0; i < len; i++)
			if (i == 0 || i == 2 || i == 3 || i == 5) {
				//stringAlpha
				sb.append(stringAlpha.charAt(rnd.nextInt(stringAlpha.length())));
			} else {
				//stringNumeric
				sb.append(stringNumeric.charAt(rnd.nextInt(stringNumeric.length())));
			}
		return sb.toString();
	}

	@Override
	public String bookFlight(BookFlightPayload bookFlightPayload) {
		try {

//			System.out.println(Long.toHexString(Double.doubleToLongBits(Math.random())));

			String stringAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			String stringNumeric = "0123456789";
			SecureRandom rnd = new SecureRandom();
			String PNR;
			PNR = randomString(6, rnd, stringAlpha, stringNumeric);
			//to create unique PNR
			while(true) {
				List<String> pnrList = bookingRepo.getPnrList();
				if(pnrList.contains(PNR))
					PNR = randomString(6, rnd, stringAlpha, stringNumeric);
				else
					break;
			}
			System.out.println("PNR : "+PNR);

			BookingDetails bookingDetails = new BookingDetails();
			bookingDetails.setContactMailid(bookFlightPayload.getContactMailid());
			bookingDetails.setContactMobileNumber(bookFlightPayload.getContactMobileNumber());
			bookingDetails.setTotalCost(bookFlightPayload.getTotalCost());
			bookingDetails.setBookedDate(new Date());
			bookingDetails.setPnr(PNR);
			bookingDetails.setPaymentMode(bookFlightPayload.getPaymentMode());
			if (bookFlightPayload.getBookingFlightObj().size() == 2) {
				// Round trip
				bookingDetails.setRoundTrip(true);
				bookingDetails
						.setDepartureFlightNumber(bookFlightPayload.getBookingFlightObj().get(0).getFlightNumber());
				bookingDetails.setReturnFlightNumber(bookFlightPayload.getBookingFlightObj().get(1).getFlightNumber());
			} else {
				// One way trip
				bookingDetails.setRoundTrip(false);
				bookingDetails
						.setDepartureFlightNumber(bookFlightPayload.getBookingFlightObj().get(0).getFlightNumber());
			}
			bookingRepo.save(bookingDetails);

			List<PassengersDetails> passengersList = bookFlightPayload.getPassengersDetails();
			for (PassengersDetails passengersDetailsObj : passengersList) {
				passengersDetailsObj.setPnr(PNR);
				passengerDetailsRepo.save(passengersDetailsObj);
			}

			return "PNR number: "+PNR;
		} catch (Exception e) {
			// TODO: handle exception
			return "some error occured";
		}

	}

}
