package com.school.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/schooldetail")
public class SchoolServiceController {

	@Autowired
	RestTemplate restTemplate;

//	@RequestMapping(value = "/getStudentViaSchoolName/{schoolName}", method = RequestMethod.GET)
	@GetMapping("/getStudentViaSchoolName/{schoolName}")
	public String getStudents(@PathVariable String schoolName) {
		System.out.println("Get student details : " + schoolName);
		String requestUrl = "http://localhost:9091/getStudentDetailsForSchool/" + schoolName;
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> httpEntiry = new HttpEntity<String>(headers);

		ResponseEntity<String> response = restTemplate.exchange(requestUrl, HttpMethod.GET, httpEntiry, String.class);

		String student = response.getBody();
		System.out.println("resp received as " + student);
		return "School name - " + schoolName + "\n student details - " + student;
	}
}
