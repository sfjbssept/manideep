package com.admin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.admin.dto.Join_FlightCityAirlineResponse;
import com.admin.entity.FlightDetails;
//import com.admin.entity.FlightDetailsEntity;

public interface IAdminRepository extends JpaRepository<FlightDetails, Integer> {

//	@Query("select f from FlightDetails f where f.id = 55")
//	@Query("select f from FlightDetails f " + 
//			"where "+
//			"Date(startDate) = Date(?1) "+
//			" and "+
//			"(flyFrom = ?2 and flyTo = ?3)"
//			
//		  )
	@Query("select "
			+ "new com.admin.dto.Join_FlightCityAirlineResponse ("
			+ "x.flightNumber, x.airlineId , x.flyFrom , x.flyTo, x.startDate, x.endDate , x.stops , "
			+ "x.totalBusinessSeats, x.totalNonBusinessSeats, x.ticketCost, x.meal, "
			+ "fromCityObj.cityId, fromCityObj.cityShortName, fromCityObj.cityName, fromCityObj.airportName, "
			+ "toCityObj.cityId, toCityObj.cityShortName, toCityObj.cityName, toCityObj.airportName, "
			+ "z.airline_name"
			+ ")"
			+ " from FlightDetails x "
			+ "LEFT JOIN CityDetails fromCityObj on x.flyFrom  = fromCityObj.cityId "
			+ "LEFT JOIN CityDetails toCityObj on x.flyTo  = toCityObj.cityId "
			+ "LEFT JOIN AirlineDetails z on x.airlineId  = z.airline_id "
			+ "where date(x.startDate) = date(?1) and x.flyFrom = ?2 and x.flyTo = ?3"
			)
	public List<Join_FlightCityAirlineResponse> searchFlights(String startDate, String from , String to);
	
	
	
	@Query("select "
			+ "new com.admin.dto.Join_FlightCityAirlineResponse ("
			+ "x.flightNumber, x.airlineId , x.flyFrom , x.flyTo, x.startDate, x.endDate , x.stops , "
			+ "x.totalBusinessSeats, x.totalNonBusinessSeats, x.ticketCost, x.meal, "
			+ "fromCityObj.cityId, fromCityObj.cityShortName, fromCityObj.cityName, fromCityObj.airportName, "
			+ "toCityObj.cityId, toCityObj.cityShortName, toCityObj.cityName, toCityObj.airportName, "
			+ "z.airline_name"
			+ ")"
			+ " from FlightDetails x "
			+ "LEFT JOIN CityDetails fromCityObj on x.flyFrom  = fromCityObj.cityId "
			+ "LEFT JOIN CityDetails toCityObj on x.flyTo  = toCityObj.cityId "
			+ "LEFT JOIN AirlineDetails z on x.airlineId  = z.airline_id ")
	public List<Join_FlightCityAirlineResponse> getJoinFLightCityAirline();
	
//	@Query(nativeQuery = true)
//	List<FlightDetailsEntity> getFlights();
}
