package com.kotomitl.kotomitl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.kotomitl.kotomitl.config.JwtFilter;

@SpringBootApplication
public class KotomitlBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(KotomitlBackendApplication.class, args);
	}
	
	/*@Bean 
	public FilterRegistrationBean<JwtFilter> jwtFilter(){
		FilterRegistrationBean<JwtFilter> registrationBean =
				new FilterRegistrationBean<>();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/api/productos/*");
		registrationBean.addUrlPatterns("/api/admins/*");
		
		return registrationBean;
	};*/
}
