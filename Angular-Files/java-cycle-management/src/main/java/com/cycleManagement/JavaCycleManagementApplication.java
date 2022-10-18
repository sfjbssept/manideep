package com.cycleManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class JavaCycleManagementApplication {

	@Autowired
	private SendMail sendMail;
	public static void main(String[] args) {
		SpringApplication.run(JavaCycleManagementApplication.class, args);
		
	}
	@EventListener(ApplicationReadyEvent.class)
	public void sendMail() {
		sendMail.sendEmail("tmanideep235@gmail.com", "subject", "this si body");
	}

}
