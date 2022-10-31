package com.deploy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringAwsDeployApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAwsDeployApplication.class, args);
	}

	@GetMapping("/hello")
	public String helloWorld() {
		return "hi this is manideep";
	}
	
	@GetMapping("/{name}")
	public String welcome(@PathVariable String name) {
		return "Hi " + name;
	}
}
