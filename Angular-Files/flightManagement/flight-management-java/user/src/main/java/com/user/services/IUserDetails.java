package com.user.services;

import com.user.entity.LoginUserDetails;

public interface IUserDetails {
	LoginUserDetails addUser(LoginUserDetails userDetails);
	String getUser(LoginUserDetails userDetails);
}
