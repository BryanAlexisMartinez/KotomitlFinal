package com.kotomitl.kotomitl.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kotomitl.kotomitl.model.Admin;
import com.kotomitl.kotomitl.model.ChangePassword;
import com.kotomitl.kotomitl.service.AdminService;

//indicar que es un controlador
@RestController
//asignamos la ruta
@RequestMapping("/api/admins/")
public class AdminController {
	
	//Variable final, que es una constante para poder acceder al service
	//AdminService es la clase del package Service
	//varAdminService es la variable del AdminService
	private final AdminService varAdminService;
	
	//Pasar automaticamente un admin service
	@Autowired
	public AdminController(AdminService adminService) {
		this.varAdminService = adminService;
	}
	
	//Metodo GET todos los elementos de admin
	@GetMapping
	public List<Admin> getAllAdmins(){
		return varAdminService.getAllAdmins();
	}
	
	//El path indica que lo vamos a buscar por adminId, que es una variable que nosotros elegimos
	@GetMapping(path = "{adminId}")
	public Admin getAdmins(@PathVariable ("adminId") Long id) {
		return varAdminService.getAdmin(id);
	}
	
	//DELETE admin por su numero de id por adminId, que es una variable que nosotros elegimos
	@DeleteMapping(path = "{adminId}")
	public Admin deleteAdmin(@PathVariable("adminId") Long id) {
		return varAdminService.deleteAdmin(id);
	}
	
	
	//POST agregar admin
	/*
	{
    "nombre": "Roberto",
    "email": "roberto@kotomitl.com",
    "password" : "Pa$$w0rd3"
    }
	 */
	
	@PostMapping
	//@RequestBody porque vamos a realizar un post con un contenido tipo Body
	public Admin addAdmin(@RequestBody Admin admin) {
		return varAdminService.addAdmin(admin);
	}
	
	
	//PUT actualizar datos
	@PutMapping(path = "{adminId}")
	public Admin updateAdmin(@PathVariable ("adminId") Long id, @RequestBody ChangePassword varChangePassword) {
		return varAdminService.updateAdmin(id, varChangePassword);		
	}
	

	
}
