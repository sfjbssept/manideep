package com.user.services;

import org.springframework.http.ResponseEntity;

import com.user.entity.LoginUserDetails;

public interface IUserDetails {
	ResponseEntity<String> addUser(LoginUserDetails userDetails);
	ResponseEntity<?> getUser(LoginUserDetails userDetails);
}
