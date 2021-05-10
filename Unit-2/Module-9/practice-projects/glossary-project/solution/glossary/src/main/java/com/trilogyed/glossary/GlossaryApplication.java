package com.trilogyed.glossary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class GlossaryApplication {

	public static void main(String[] args) {
		SpringApplication.run(GlossaryApplication.class, args);
	}

}
