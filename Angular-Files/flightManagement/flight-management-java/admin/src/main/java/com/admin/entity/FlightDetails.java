package com.admin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;
import javax.persistence.ConstructorResult;
import javax.persistence.ColumnResult;


//@NamedNativeQuery(name = "ChessPlayer.findPlayerNameDtoById_Named",
//query = "select " +
//		" cd.city_name as from_city, " +
//		" cd.city_short_name as from_city_short_name , " +
//		" cdd.city_name as to_city, " +
//        " cdd.city_short_name as to_city_short_name" +
//		" from flight_details fd" +
//		" left join airline_details ad on fd.airline_id = ad.airline_id" +
//		" left join cities_details cd on fd.fly_from = cd.city_id" +
//		" left join cities_details cdd on fd.fly_to = cdd.city_id",
//resultSetMapping = "Mapping.PlayerNameDto")
//@SqlResultSetMapping(name = "Mapping.PlayerNameDto",
//   classes = @ConstructorResult(targetClass = PlayerNameDto.class,
//                                columns = {@ColumnResult(name = "first"),
//                                           @ColumnResult(name = "last")}))

@Entity
@Table(name = "flight_details")
public class FlightDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int flightNumber;
	private String airlineId;
	private String flyFrom;
	private String flyTo;
	private String startDate;
	private String endDate;
	private String stops;
	private int totalBusinessSeats;
	private int totalNonBusinessSeats;
	private int ticketCost;
	private String meal;
	public FlightDetails(int id, int flightNumber, String airlineId, String flyFrom, String flyTo, String startDate,
			String endDate, String stops, int totalBusinessSeats, int totalNonBusinessSeats, int ticketCost,
			String meal) {
		super();
		this.id = id;
		this.flightNumber = flightNumber;
		this.airlineId = airlineId;
		this.flyFrom = flyFrom;
		this.flyTo = flyTo;
		this.startDate = startDate;
		this.endDate = endDate;
		this.stops = stops;
		this.totalBusinessSeats = totalBusinessSeats;
		this.totalNonBusinessSeats = totalNonBusinessSeats;
		this.ticketCost = ticketCost;
		this.meal = meal;
	}
	
	public FlightDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getairlineId() {
		return airlineId;
	}
	public void setairlineId(String airlineId) {
		this.airlineId = airlineId;
	}
	public String getFlyFrom() {
		return flyFrom;
	}
	public void setFlyFrom(String flyFrom) {
		this.flyFrom = flyFrom;
	}
	public String getFlyTo() {
		return flyTo;
	}
	public void setFlyTo(String flyTo) {
		this.flyTo = flyTo;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getendDate() {
		return endDate;
	}
	public void setendDate(String endDate) {
		this.endDate = endDate;
	}
	public String getstops() {
		return stops;
	}
	public void setstops(String stops) {
		this.stops = stops;
	}
	public int getTotalBusinessSeats() {
		return totalBusinessSeats;
	}
	public void setTotalBusinessSeats(int totalBusinessSeats) {
		this.totalBusinessSeats = totalBusinessSeats;
	}
	public int getTotalNonBusinessSeats() {
		return totalNonBusinessSeats;
	}
	public void setTotalNonBusinessSeats(int totalNonBusinessSeats) {
		this.totalNonBusinessSeats = totalNonBusinessSeats;
	}
	public int getTicketCost() {
		return ticketCost;
	}
	public void setTicketCost(int ticketCost) {
		this.ticketCost = ticketCost;
	}
	public String getMeal() {
		return meal;
	}
	public void setMeal(String meal) {
		this.meal = meal;
	}
	
	
}
