package com.admin.dto;

import java.util.List;

import com.admin.entity.AirlineDetails;
import com.admin.entity.FlightDetails;

public class SearchPayload {
	
	private String returnDate;
	private String startDate;
	private String flyFrom;
	private String flyTo;
	public String getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
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
	public SearchPayload(String returnDate, String startDate, String flyFrom, String flyTo) {
		super();
		this.returnDate = returnDate;
		this.startDate = startDate;
		this.flyFrom = flyFrom;
		this.flyTo = flyTo;
	}
	public SearchPayload() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
