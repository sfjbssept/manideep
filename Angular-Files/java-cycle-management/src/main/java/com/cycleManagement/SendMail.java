package com.cycleManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendMail {

	@Autowired
	private JavaMailSender mailSender;
	
	public void sendEmail(String toEmail , String subject , String mailBody ) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("111manideep@gmail.com");
		message.setTo(toEmail);
		message.setText(mailBody);
		message.setSubject(subject);
		
		mailSender.send(message);
		
		System.out.println("Mail sent successfully");
	}
}
