package com.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login_User_details")
public class LoginUserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String uName;
//	@Column(name="uMobileNumber", insertable=true, updatable=true,unique=true, nullable=false)
	long uMobileNumber;
//	@Column(name="user_email", insertable=true, updatable=true, unique=true, nullable=false)
	String uEmail;
	String uPassword;
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
	public long getuMobileNumber() {
		return uMobileNumber;
	}
	public void setuMobileNumber(long uMobileNumber) {
		this.uMobileNumber = uMobileNumber;
	}
	public String getuEmail() {
		return uEmail;
	}
	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}
	public String getuPassword() {
		return uPassword;
	}
	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}
	public LoginUserDetails(String uName, long uMobileNumber, String uEmail, String uPassword) {
		super();
		this.uName = uName;
		this.uMobileNumber = uMobileNumber;
		this.uEmail = uEmail;
		this.uPassword = uPassword;
	}
	public LoginUserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
