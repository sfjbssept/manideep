package com.admin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.ConstructorResult;
import javax.persistence.ColumnResult;

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
	private int ticketCost;
	private String meal;
	private String cabinBag;
	private String checkIn;
	private String classType;
	private int availableSeats;
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
	public String getCabinBag() {
		return cabinBag;
	}
	public void setCabinBag(String cabinBag) {
		this.cabinBag = cabinBag;
	}
	public String getCheckIn() {
		return checkIn;
	}
	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}
	public String getClassType() {
		return classType;
	}
	public void setClassType(String classType) {
		this.classType = classType;
	}
	public int getAvailableSeats() {
		return availableSeats;
	}
	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}
	public FlightDetails(int id, int flightNumber, String airlineId, String flyFrom, String flyTo, String startDate,
			String endDate, String stops, int ticketCost, String meal, String cabinBag, String checkIn,
			String classType, int availableSeats) {
		super();
		this.id = id;
		this.flightNumber = flightNumber;
		this.airlineId = airlineId;
		this.flyFrom = flyFrom;
		this.flyTo = flyTo;
		this.startDate = startDate;
		this.endDate = endDate;
		this.stops = stops;
		this.ticketCost = ticketCost;
		this.meal = meal;
		this.cabinBag = cabinBag;
		this.checkIn = checkIn;
		this.classType = classType;
		this.availableSeats = availableSeats;
	}
	public FlightDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
