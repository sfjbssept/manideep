package com.admin.dto;

import java.util.List;

import com.admin.entity.PassengersDetails;

public class BookFlightPayload {
	private List<PassengersDetails> passengersDetails;
	private	int totalCost;
	private	List<Join_FlightCityAirlineResponse> bookingFlightObj;
	private String contactMailid;
	private Long contactMobileNumber;
	public List<PassengersDetails> getPassengersDetails() {
		return passengersDetails;
	}
	public void setPassengersDetails(List<PassengersDetails> passengersDetails) {
		this.passengersDetails = passengersDetails;
	}
	public int getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(int totalCost) {
		this.totalCost = totalCost;
	}
	public List<Join_FlightCityAirlineResponse> getBookingFlightObj() {
		return bookingFlightObj;
	}
	public void setBookingFlightObj(List<Join_FlightCityAirlineResponse> bookingFlightObj) {
		this.bookingFlightObj = bookingFlightObj;
	}
	public String getContactMailid() {
		return contactMailid;
	}
	public void setContactMailid(String contactMailid) {
		this.contactMailid = contactMailid;
	}
	public Long getContactMobileNumber() {
		return contactMobileNumber;
	}
	public void setContactMobileNumber(Long contactMobileNumber) {
		this.contactMobileNumber = contactMobileNumber;
	}
	public BookFlightPayload(List<PassengersDetails> passengersDetails, int totalCost,
			List<Join_FlightCityAirlineResponse> bookingFlightObj, String contactMailid, Long contactMobileNumber) {
		super();
		this.passengersDetails = passengersDetails;
		this.totalCost = totalCost;
		this.bookingFlightObj = bookingFlightObj;
		this.contactMailid = contactMailid;
		this.contactMobileNumber = contactMobileNumber;
	}
	public BookFlightPayload() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "BookFlightPayload [passengersDetails=" + passengersDetails + ", totalCost=" + totalCost
				+ ", bookingFlightObj=" + bookingFlightObj + ", contactMailid=" + contactMailid
				+ ", contactMobileNumber=" + contactMobileNumber + "]";
	}


	
	
	
	
}
