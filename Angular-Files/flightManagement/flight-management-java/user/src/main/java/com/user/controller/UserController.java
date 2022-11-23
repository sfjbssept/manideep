package com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.entity.LoginUserDetails;
import com.user.services.IUserDetails;

@RestController
public class UserLogin {

	@Autowired
	IUserDetails userDetailsService;
	
	@PostMapping("/registerUser")
	public LoginUserDetails registerUser(@RequestBody LoginUserDetails userRegisterDetails) {
		return userDetailsService.addUser(userRegisterDetails);
	}
	
	@GetMapping("/login")
	public String loginUser(@RequestBody LoginUserDetails userRegisterDetails) {
		return userDetailsService.getUser(userRegisterDetails);
	}
	
	@GetMapping("working")
	public String checking () {
		return "working...";
	}
}
