package com.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.user.entity.LoginUserDetails;
import com.user.services.IUserDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	IUserDetails userDetailsService;

	@Autowired
	RestTemplate restTemplate;

	@PostMapping("/registerUser")
	public ResponseEntity<String> registerUser(@RequestBody LoginUserDetails userRegisterDetails) {
		return userDetailsService.addUser(userRegisterDetails);
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginUserDetails userRegisterDetails) {
		return userDetailsService.getUser(userRegisterDetails);
	}
	
	@PostMapping("/flightBooking")
	public String bookFlight(@RequestBody Object obj) {
		String requestUrl = "http://flight-admin-service/flight/booking/";
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<Object> httpEntiry = new HttpEntity<Object>(obj,headers);
		ResponseEntity<String> response = restTemplate.exchange(requestUrl, HttpMethod.POST, httpEntiry, String.class);
		return response.getBody();
	}
	
	@PostMapping("/flightSearch")
	public Object flightSearch(@RequestBody Object obj) {
		String requestUrl = "http://flight-admin-service/searchFlight";
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<Object> httpEntiry = new HttpEntity<Object>(obj,headers);
		ResponseEntity<Object> response = restTemplate.exchange(requestUrl, HttpMethod.POST, httpEntiry, new ParameterizedTypeReference<Object>() {});
		return response.getBody();
	}
	
	@GetMapping("/getAllCities")
	public List<Object> bookFlight() {
		String requestUrl = "http://flight-admin-service/getCities/";
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<List<Object>> httpEntiry = new HttpEntity<List<Object>>(headers);
		ResponseEntity<List<Object>> response = restTemplate.exchange(requestUrl, HttpMethod.GET, httpEntiry, new ParameterizedTypeReference<List<Object>>() {});
		return response.getBody();
	}

	//testing
	@GetMapping("/working")
	public String checking() {
		return "user working...";
	}

	//testing eureka server functionality
	@PostMapping("userToAdmin")
	public String test(@RequestBody String requestJson) {
		String requestUrl = "http://flight-admin-service/callFromUserToAdmin/";
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> httpEntiry = new HttpEntity<String>(requestJson,headers);

		ResponseEntity<String> response = restTemplate.exchange(requestUrl, HttpMethod.POST, httpEntiry, String.class);

		String adminResp = response.getBody();
		return "call from user , value from admin : "+adminResp;
	}
	

}
