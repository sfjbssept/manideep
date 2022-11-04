package com.admin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "airline_details")
public class AirlineDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	public int airline_id;
	public String airline_name;
	public AirlineDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AirlineDetails(int id, int airline_id, String airline_name) {
		super();
		this.id = id;
		this.airline_id = airline_id;
		this.airline_name = airline_name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAirline_id() {
		return airline_id;
	}
	public void setAirline_id(int airline_id) {
		this.airline_id = airline_id;
	}
	public String getAirline_name() {
		return airline_name;
	}
	public void setAirline_name(String airline_name) {
		this.airline_name = airline_name;
	}

}
