package com.kotomitl.kotomitl.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


// POJO Plain Old Java Object 
// Se coloca notación entity para relacionarlo con una tabla
// Desde Spring initializar se añadió la dependencia de MySQL y Spring Data
//Como agregamos las dependencias después, solo se debe refrescar el gradle build.

@Entity
@Table (name="admin")

public class Admin {
	//Para importar ahora los id será desde MySQL, así que se agrega @Id
	@Id
	//Generando el valor con lo siguiente
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	//Se coloca @Column con las propiedades que tendrán las columnas requeridas de MySQL
	@Column (name="id", unique=true,nullable=false)
	private Long id;
	
	@Column (name="nombre",nullable=false)
	private String nombre;
	
	@Column (name="email",nullable=false)
	private String email;
	
	@Column (name="password",nullable=false)
	private String password;
	
	//La variable total era previa la conexión con la BDD
	//private static long total = 0;
	
	public Admin() {}
	
	public Admin( String nombre, String email, String password) {
		this.nombre = nombre;
		this.email = email;
		this.password = password;
	}//public Admin


	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", nombre=" + nombre + ", email=" + email + ", password=" + password + "]";
	}
	
}//public class Admin


