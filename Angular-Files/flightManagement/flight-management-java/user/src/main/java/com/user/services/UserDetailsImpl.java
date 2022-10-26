package com.user.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entity.LoginUserDetails;
import com.user.repo.IUserRepository;

@Service
public class UserDetailsImpl implements IUserDetails {
	
	@Autowired
	IUserRepository userRepoService;

	@Override
	public LoginUserDetails addUser(LoginUserDetails userDetails) {
		return userRepoService.save(userDetails);
	}

	@Override
	public String getUser(LoginUserDetails loginAttemptDetails) {
		List<LoginUserDetails> loginUserDetails = userRepoService.findAll();
		for (LoginUserDetails userObjects : loginUserDetails) {
			if(userObjects.getuMobileNumber() == loginAttemptDetails.getuMobileNumber()) {
				if (userObjects.getuPassword().equals(loginAttemptDetails.getuPassword()))g {
					return "Login success !!";
				} else {
					return "Password is wrong!!";
				}
			}
			return "Mobile Number Not Found";
		}
		return "Login Failed Please Try Again";
	}

}
