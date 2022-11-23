package com.admin.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "booking_details")
public class BookingDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String pnr;
	private Long contactMobileNumber;
	private String contactMailid;
	private Date bookedDate;
	private int totalCost;
	private boolean isRoundTrip;
	private int departureFlightNumber;
	private int returnFlightNumber;
	private String paymentMode;
	public BookingDetails(int id, String pnr, Long contactMobileNumber, String contactMailid, Date bookedDate,
			int totalCost, boolean isRoundTrip, int departureFlightNumber, int returnFlightNumber, String paymentMode) {
		super();
		this.id = id;
		this.pnr = pnr;
		this.contactMobileNumber = contactMobileNumber;
		this.contactMailid = contactMailid;
		this.bookedDate = bookedDate;
		this.totalCost = totalCost;
		this.isRoundTrip = isRoundTrip;
		this.departureFlightNumber = departureFlightNumber;
		this.returnFlightNumber = returnFlightNumber;
		this.paymentMode = paymentMode;
	}
	
	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public BookingDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPnr() {
		return pnr;
	}
	public void setPnr(String pnr) {
		this.pnr = pnr;
	}
	public Long getContactMobileNumber() {
		return contactMobileNumber;
	}
	public void setContactMobileNumber(Long contactMobileNumber) {
		this.contactMobileNumber = contactMobileNumber;
	}
	public String getContactMailid() {
		return contactMailid;
	}
	public void setContactMailid(String contactMailid) {
		this.contactMailid = contactMailid;
	}
	public Date getBookedDate() {
		return bookedDate;
	}
	public void setBookedDate(Date bookedDate) {
		this.bookedDate = bookedDate;
	}
	public int getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(int totalCost) {
		this.totalCost = totalCost;
	}
	public boolean getIsRoundTrip() {
		return isRoundTrip;
	}
	public void setRoundTrip(boolean isRoundTrip) {
		this.isRoundTrip = isRoundTrip;
	}
	public int getDepartureFlightNumber() {
		return departureFlightNumber;
	}
	public void setDepartureFlightNumber(int departureFlightNumber) {
		this.departureFlightNumber = departureFlightNumber;
	}
	public int getReturnFlightNumber() {
		return returnFlightNumber;
	}
	public void setReturnFlightNumber(int returnFlightNumber) {
		this.returnFlightNumber = returnFlightNumber;
	}
	
	
	
}
