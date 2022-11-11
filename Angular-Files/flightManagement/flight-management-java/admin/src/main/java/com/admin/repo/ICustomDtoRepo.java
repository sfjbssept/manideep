package com.admin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.admin.dto.FlightAirlineResponse;
import com.admin.entity.FlightAirlineDetails;
//import com.admin.entity.CustomDto;
import com.admin.entity.FlightDetails;

public interface ICustomDtoRepo extends JpaRepository<FlightAirlineDetails, Integer> {

	@Query("select new com.admin.dto.FlightAirlineResponse("
			+ "fd.flightNumber, fd.airlineId , fd.flyFrom , fd.flyTo , fd.startDate, fd.endDate, fd.stops,"
			+ "fd.totalBusinessSeats, fd.totalNonBusinessSeats, fd.ticketCost, fd.meal,"
			+ " fad.airline_name"
			+ ") "
			+ "from FlightAirlineDetails fad JOIN fad.flightDetails fd")
//	@Query(value = "select "
//			+ "fd.flightNumber, fd.airlineId , fd.flyFrom , fd.flyTo , fd.startDate, fd.endDate, fd.stops,"
//			+ "fd.totalBusinessSeats, fd.totalNonBusinessSeats, fd.ticketCost, fd.meal," + " fad.airline_name "
//			+ "from FlightAirlineDetails fad left join flightDetails ad on fad.airline_id = ad.airlineId", nativeQuery = true)
	public List<FlightAirlineResponse> getFlightAirlineData();
	
	@Query(value = "select * from airline_details" , nativeQuery = true)
	public List<FlightAirlineDetails> getMyTestDetails();

}
