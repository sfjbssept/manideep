package com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.entity.LoginUserDetails;
import com.user.services.IUserDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	IUserDetails userDetailsService;
	
	@PostMapping("/registerUser")
	public ResponseEntity<String> registerUser(@RequestBody LoginUserDetails userRegisterDetails) {
		return userDetailsService.addUser(userRegisterDetails);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginUserDetails userRegisterDetails) {
		return userDetailsService.getUser(userRegisterDetails);
	}
	
	@GetMapping("working")
	public String checking () {
		return "working...";
	}
}
