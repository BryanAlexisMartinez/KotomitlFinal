package com.kotomitl.kotomitl.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuarios")
public class Usuarios {
	//Para importar ahora los id será desde MySQL, así que se agrega @Id
	@Id
	//Generando el valor con lo siguiente
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column (name="id", unique=true,nullable=false)
	private Long id;
	
	@Column (name="nombre",nullable=false)
	private String nombre;
	
	@Column (name="apellido",nullable=false)
	private String apellido;
	
	@Column (name="telefono",nullable=false)
	private String telefono;
	
	@Column (name="email",nullable=false)
	private String email;
	
	@Column (name="password",nullable=false)
	private String password;
	
	@Column (name="domicilio",nullable=false)
	private String domicilio ;
	
	@Column (name="estado",nullable=false)
	private Integer estado;
	
	
	public Usuarios() {}
	
	public Usuarios(String nombre, String apellido, String telefono, String email, String password, String domicilio,
			Integer estado) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.email = email;
		this.password = password;
		this.domicilio = domicilio;
		this.estado = estado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
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

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public Integer getEstado() {
		return estado;
	}

	public void setEstado(Integer estado) {
		this.estado = estado;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Usuarios [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", telefono=" + telefono
				+ ", email=" + email + ", password=" + password + ", domicilio=" + domicilio + ", estado=" + estado
				+ "]";
	}

	
}//public class "Usuario"
