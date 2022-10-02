package com.gate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ServiceController {
	@Autowired
	RestTemplate restTemplate;

	@RequestMapping(value = "/getSchoolDetailsFromGateway/{schoolName}", method = RequestMethod.GET)
	public String getStudents(@PathVariable String schoolName) {
		System.out.println("Get school details : " + schoolName);
		String response = restTemplate.exchange("http://school-service/schooldetail/getStudentViaSchoolName/{schoolName}", 
				HttpMethod.GET,null,new ParameterizedTypeReference<String>() {
				},schoolName).getBody();
		return "school name : "+  schoolName + "\n Student details : " + response;
	}

}
