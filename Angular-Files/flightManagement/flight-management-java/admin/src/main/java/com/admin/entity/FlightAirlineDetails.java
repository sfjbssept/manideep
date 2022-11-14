package com.admin.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;

@Entity
@Table(name = "airline_details")

public class FlightAirlineDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	public String airline_id;
	public String airline_name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAirline_id() {
		return airline_id;
	}
	public void setAirline_id(String airline_id) {
		this.airline_id = airline_id;
	}
	public String getAirline_name() {
		return airline_name;
	}
	public void setAirline_name(String airline_name) {
		this.airline_name = airline_name;
	}
	public FlightAirlineDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public FlightAirlineDetails(int id, String airline_id, String airline_name, List<FlightDetails> flightDetails) {
		super();
		this.id = id;
		this.airline_id = airline_id;
		this.airline_name = airline_name;
		this.flightDetails = flightDetails;
	}

	@OneToMany(targetEntity = FlightDetails.class , cascade = CascadeType.ALL)
	@JoinColumn(name = "airlineId", referencedColumnName = "airline_id")
	private List<FlightDetails> flightDetails;
	
//	@OneToMany(targetEntity = FlightDetails.class , cascade = CascadeType.ALL)
//	@JoinColumn(name = "airlineId", referencedColumnName = "airline_id")
//	private List<FlightDetails> flightDetails1;
}
