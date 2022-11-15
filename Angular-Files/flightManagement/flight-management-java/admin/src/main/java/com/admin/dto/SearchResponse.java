package com.admin.dto;

import java.util.List;

public class SearchResponse {
	
	private List<Join_FlightCityAirlineResponse> departureResp;
	private List<Join_FlightCityAirlineResponse> returnResp;
	public SearchResponse(List<Join_FlightCityAirlineResponse> departureResp,
			List<Join_FlightCityAirlineResponse> returnResp) {
		super();
		this.departureResp = departureResp;
		this.returnResp = returnResp;
	}
	
	public SearchResponse(List<Join_FlightCityAirlineResponse> departureResp) {
		super();
		this.departureResp = departureResp;
	}

	public SearchResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Join_FlightCityAirlineResponse> getDepartureResp() {
		return departureResp;
	}
	public void setDepartureResp(List<Join_FlightCityAirlineResponse> departureResp) {
		this.departureResp = departureResp;
	}
	public List<Join_FlightCityAirlineResponse> getReturnResp() {
		return returnResp;
	}
	public void setReturnResp(List<Join_FlightCityAirlineResponse> returnResp) {
		this.returnResp = returnResp;
	}
	
	
	
}
