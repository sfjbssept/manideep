package com.admin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cities_details")
public class CityDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int cityId;
	private String cityShortName;
	private String cityName;
	private String airportName;
	public CityDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CityDetails(int id, int cityId, String cityShortName, String cityName, String airportName) {
		super();
		this.id = id;
		this.cityId = cityId;
		this.cityShortName = cityShortName;
		this.cityName = cityName;
		this.airportName = airportName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCityId() {
		return cityId;
	}
	public void setCityId(int cityId) {
		this.cityId = cityId;
	}
	public String getCityShortName() {
		return cityShortName;
	}
	public void setCityShortName(String cityShortName) {
		this.cityShortName = cityShortName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public String getAirportName() {
		return airportName;
	}
	public void setAirportName(String airportName) {
		this.airportName = airportName;
	}


}
