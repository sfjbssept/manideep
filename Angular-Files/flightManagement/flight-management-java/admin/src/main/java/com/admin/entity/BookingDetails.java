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
	public BookingDetails(int id, String pnr, Long contactMobileNumber, String contactMailid, Date bookedDate,
			int totalCost) {
		super();
		this.id = id;
		this.pnr = pnr;
		this.contactMobileNumber = contactMobileNumber;
		this.contactMailid = contactMailid;
		this.bookedDate = bookedDate;
		this.totalCost = totalCost;
	}
	public BookingDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(int totalCost) {
		this.totalCost = totalCost;
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
	
	
}
