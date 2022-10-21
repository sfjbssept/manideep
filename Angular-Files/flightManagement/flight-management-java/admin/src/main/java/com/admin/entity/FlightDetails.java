package com.admin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flight_details")
public class FlightDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int flightNumber;
	private String airLineName;
	private String flyFrom;
	private String flyTo;
	private String startDate;
	private String endDate;
	private String instrumentUsed;
	private int totalBusinessSeats;
	private int totalNonBusinessSeats;
	private int ticketCost;
	private String meal;
	public FlightDetails(int id, int flightNumber, String airLineName, String flyFrom, String flyTo, String startDate,
			String endDate, String instrumentUsed, int totalBusinessSeats, int totalNonBusinessSeats, int ticketCost,
			String meal) {
		super();
		this.id = id;
		this.flightNumber = flightNumber;
		this.airLineName = airLineName;
		this.flyFrom = flyFrom;
		this.flyTo = flyTo;
		this.startDate = startDate;
		this.endDate = endDate;
		this.instrumentUsed = instrumentUsed;
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
	public String getAirLineName() {
		return airLineName;
	}
	public void setAirLineName(String airLineName) {
		this.airLineName = airLineName;
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
	public String getInstrumentUsed() {
		return instrumentUsed;
	}
	public void setInstrumentUsed(String instrumentUsed) {
		this.instrumentUsed = instrumentUsed;
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
