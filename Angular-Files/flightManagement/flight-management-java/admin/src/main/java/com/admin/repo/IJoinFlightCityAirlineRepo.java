package com.admin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.admin.dto.FlightAirlineResponse;
import com.admin.dto.Join_FlightCityAirlineResponse;
import com.admin.entity.CityDetails;
import com.admin.entity.JoinFlightWithCitiesAndAirline;

public interface IJoinFlightCityAirlineRepo extends JpaRepository<JoinFlightWithCitiesAndAirline, Integer>{

//	@Query("select new com.admin.dto.Join_FlightCityAirlineResponse "
//			+ "(x.flightNumber, x.airlineId , x.flyFrom , x.flyTo, x.startDate, x.endDate , x.stops , "
//			+ "x.totalBusinessSeats, x.totalNonBusinessSeats, x.ticketCost, x.meal, "
//			+ "y.cityId, y.cityShortName, y.cityName as from_city , y.airportName, "
//			+ "z.airline_name)"
//			+ " from JoinFlightWithCitiesAndAirline x "
//			+ "JOIN x.fromCityDetails y "
//			+ "JOIN x.airlineDetails z "
//			+ "JOIN x.toCityDetails xy")
	@Query("select "
			+ "new com.admin.dto.Join_FlightCityAirlineResponse ("
			+ "x.flightNumber, x.airlineId , x.flyFrom , x.flyTo, x.startDate, x.endDate , x.stops , "
			+ "x.totalBusinessSeats, x.totalNonBusinessSeats, x.ticketCost, x.meal, "
			+ "fromCityObj.cityId, fromCityObj.cityShortName, fromCityObj.cityName, fromCityObj.airportName, "
			+ "toCityObj.cityId, toCityObj.cityShortName, toCityObj.cityName, toCityObj.airportName, "
			+ "z.airline_name"
			+ ")"
			+ " from JoinFlightWithCitiesAndAirline x "
			+ "LEFT JOIN CityDetails fromCityObj on x.flyFrom  = fromCityObj.cityId "
			+ "LEFT JOIN CityDetails toCityObj on x.flyTo  = toCityObj.cityId "
			+ "LEFT JOIN AirlineDetails z on x.airlineId  = z.airline_id ")
	public List<Join_FlightCityAirlineResponse> getJoinFLightCityAirline();
}
