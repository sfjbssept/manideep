package com.admin.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "flight_details")
public class JoinFlightWithCitiesAndAirline {

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
	public String getAirlineId() {
		return airlineId;
	}
	public void setAirlineId(String airlineId) {
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
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getStops() {
		return stops;
	}
	public void setStops(String stops) {
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
	public JoinFlightWithCitiesAndAirline(int id, int flightNumber, String airlineId, String flyFrom, String flyTo,
			String startDate, String endDate, String stops, int totalBusinessSeats, int totalNonBusinessSeats,
			int ticketCost, String meal) {
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
	public JoinFlightWithCitiesAndAirline() {
		super();
		// TODO Auto-generated constructor stub
	}
	
//	@OneToMany(targetEntity = AirlineDetails.class , cascade = CascadeType.ALL)
//	@JoinColumn(name = "airline_id", referencedColumnName = "airlineId")
//	private List<AirlineDetails> airlineDetails;
	
	
//	@OneToMany(targetEntity = CityDetails.class , cascade = CascadeType.ALL)
//	@JoinColumn(name = "cityId", referencedColumnName = "flyFrom")
//	private List<CityDetails> fromCityDetails;
	
//	@OneToMany(targetEntity = CityDetails.class , cascade = CascadeType.ALL)
//	@JoinColumn(name = "cityId", referencedColumnName = "flyTo")
//	private List<CityDetails> toCityDetails;
	
}
