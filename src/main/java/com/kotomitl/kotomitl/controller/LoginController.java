package com.kotomitl.kotomitl.controller;

import java.util.Calendar;
import java.util.Date;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kotomitl.kotomitl.config.JwtFilter;
import com.kotomitl.kotomitl.model.Admin;
import com.kotomitl.kotomitl.model.Token;
import com.kotomitl.kotomitl.service.AdminService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping (path="/api/login/")
public class LoginController {

	private final AdminService varAdminService;
	
	@Autowired
	public LoginController(AdminService varAdminService) {
		this.varAdminService = varAdminService;
	}


	@PostMapping
	public Token loginAdmin(@RequestBody Admin admin) 
			throws ServletException{
		if (varAdminService.validarAdmin(admin)){
			return new Token (generarToken(admin.getEmail()));
		}
		throw new ServletException("Usuario o contraseña incorrecto");
	}
	
	
	private String generarToken(String username) {
		Calendar calendar = Calendar.getInstance(); //fecha hora actual
		calendar.add(Calendar.HOUR, 10); //pruebas
		//calendar.add(Calendar.MINUTE, 30); // producción
		return Jwts.builder()
				.setSubject(username)
				.claim("role", "admin")
				.setIssuedAt(new Date())
				.setExpiration(calendar.getTime())
				.signWith(SignatureAlgorithm.HS256, JwtFilter.secret)
				.compact();
	}
}
