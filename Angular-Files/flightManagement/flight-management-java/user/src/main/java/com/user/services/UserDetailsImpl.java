package com.user.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.user.entity.LoginUserDetails;
import com.user.repo.IUserRepository;

@Service
public class UserDetailsImpl implements IUserDetails {

	@Autowired
	IUserRepository userRepoService;

	@Override
	public ResponseEntity<String> addUser(LoginUserDetails userDetails) {
		try {
			LoginUserDetails x = userRepoService.save(userDetails);
			return new ResponseEntity<String>("Registration Success", HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return new ResponseEntity<String>("Please Try Again", HttpStatus.BAD_REQUEST);
		}

	}

	@Override
	public ResponseEntity<?> getUser(LoginUserDetails loginAttemptDetails) {
		boolean found = false;
		try {
			List<LoginUserDetails> loginUserDetails = userRepoService.findAll();
			for (LoginUserDetails userObjects : loginUserDetails) {
				if (userObjects.getuEmail().equals(loginAttemptDetails.getuEmail())) {
					found = true;
					if (userObjects.getuPassword().equals(loginAttemptDetails.getuPassword())) {
						return ResponseEntity.status(HttpStatus.OK).body(userObjects);
					} else {
						return new ResponseEntity<String>("Password is wrong!!", HttpStatus.BAD_REQUEST);
					}
				}
			}
			if(found == false)
				return new ResponseEntity<String>("Email Not Found", HttpStatus.BAD_REQUEST);
			else 
				return new ResponseEntity<String>("Something went wrong please try again", HttpStatus.BAD_REQUEST);				
		} catch (Exception e) {
			return new ResponseEntity<String>("Registration Failed Please Try Again", HttpStatus.BAD_REQUEST);
		}
	}

}
