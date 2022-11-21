package com.admin.dto;

public class Join_FlightCityAirlineResponse {

	private int flightNumber;
	private String airlineId;
	private String flyFrom;
	private String flyTo;
	private String startDate;
	private String endDate;
	private String stops;
	private String classType;
	private int availableSeats;
	private int ticketCost;
	private String meal;

	private int fromCityId;
	private String fromCityShortName;
	private String fromCityName;
	private String fromAirportName;

	private int toCityId;
	private String toCityShortName;
	private String toCityName;
	private String toAirportName;

	private String airline_name;

	private String cabinBag;
	private String checkIn;

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

	public int getFromCityId() {
		return fromCityId;
	}

	public void setFromCityId(int fromCityId) {
		this.fromCityId = fromCityId;
	}

	public String getFromCityShortName() {
		return fromCityShortName;
	}

	public void setFromCityShortName(String fromCityShortName) {
		this.fromCityShortName = fromCityShortName;
	}

	public String getFromCityName() {
		return fromCityName;
	}

	public void setFromCityName(String fromCityName) {
		this.fromCityName = fromCityName;
	}

	public String getFromAirportName() {
		return fromAirportName;
	}

	public void setFromAirportName(String fromAirportName) {
		this.fromAirportName = fromAirportName;
	}

	public int getToCityId() {
		return toCityId;
	}

	public void setToCityId(int toCityId) {
		this.toCityId = toCityId;
	}

	public String getToCityShortName() {
		return toCityShortName;
	}

	public void setToCityShortName(String toCityShortName) {
		this.toCityShortName = toCityShortName;
	}

	public String getToCityName() {
		return toCityName;
	}

	public void setToCityName(String toCityName) {
		this.toCityName = toCityName;
	}

	public String getToAirportName() {
		return toAirportName;
	}

	public void setToAirportName(String toAirportName) {
		this.toAirportName = toAirportName;
	}

	public String getAirline_name() {
		return airline_name;
	}

	public void setAirline_name(String airline_name) {
		this.airline_name = airline_name;
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

	public Join_FlightCityAirlineResponse(int flightNumber, String airlineId, String flyFrom, String flyTo,
			String startDate, String endDate, String stops, String classType, int availableSeats, int ticketCost,
			String meal, int fromCityId, String fromCityShortName, String fromCityName, String fromAirportName,
			int toCityId, String toCityShortName, String toCityName, String toAirportName, String airline_name,
			String cabinBag, String checkIn) {
		super();
		this.flightNumber = flightNumber;
		this.airlineId = airlineId;
		this.flyFrom = flyFrom;
		this.flyTo = flyTo;
		this.startDate = startDate;
		this.endDate = endDate;
		this.stops = stops;
		this.classType = classType;
		this.availableSeats = availableSeats;
		this.ticketCost = ticketCost;
		this.meal = meal;
		this.fromCityId = fromCityId;
		this.fromCityShortName = fromCityShortName;
		this.fromCityName = fromCityName;
		this.fromAirportName = fromAirportName;
		this.toCityId = toCityId;
		this.toCityShortName = toCityShortName;
		this.toCityName = toCityName;
		this.toAirportName = toAirportName;
		this.airline_name = airline_name;
		this.cabinBag = cabinBag;
		this.checkIn = checkIn;
	}

	public Join_FlightCityAirlineResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Join_FlightCityAirlineResponse [flightNumber=" + flightNumber + ", airlineId=" + airlineId
				+ ", flyFrom=" + flyFrom + ", flyTo=" + flyTo + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", stops=" + stops + ", classType=" + classType + ", availableSeats=" + availableSeats
				+ ", ticketCost=" + ticketCost + ", meal=" + meal + ", fromCityId=" + fromCityId
				+ ", fromCityShortName=" + fromCityShortName + ", fromCityName=" + fromCityName + ", fromAirportName="
				+ fromAirportName + ", toCityId=" + toCityId + ", toCityShortName=" + toCityShortName + ", toCityName="
				+ toCityName + ", toAirportName=" + toAirportName + ", airline_name=" + airline_name + ", cabinBag="
				+ cabinBag + ", checkIn=" + checkIn + "]";
	}
	
	
}
