package com.admin.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.entity.FlightDetails;
import com.admin.repo.IAdminRepository;

@Service
public class AdminServiceImpl implements IAdminService{

	@Autowired
	IAdminRepository adminRepository;
	
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
				flightDetails.setAirLineName(updateFlightDetails.getAirLineName());
				flightDetails.setFlyFrom(updateFlightDetails.getFlyFrom());
				flightDetails.setFlyTo(updateFlightDetails.getFlyTo());
				flightDetails.setStartDate(updateFlightDetails.getStartDate());
				flightDetails.setEndDate(updateFlightDetails.getEndDate());
				flightDetails.setInstrumentUsed(updateFlightDetails.getInstrumentUsed());
				flightDetails.setTotalBusinessSeats(updateFlightDetails.getTotalBusinessSeats());
				flightDetails.setTotalNonBusinessSeats(updateFlightDetails.getTotalNonBusinessSeats());
				flightDetails.setTicketCost(updateFlightDetails.getTicketCost());
				flightDetails.setMeal(updateFlightDetails.getMeal());
				
				adminRepository.save(flightDetails);
				break;
			}
		}
		return (found == true) ? "Successfully Updated !" : "Flight Number '"+flightNumber+"' Found";
	}

}
