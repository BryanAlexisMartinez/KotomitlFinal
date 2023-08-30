package com.kotomitl.kotomitl.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
	
@Entity
@Table (name="compras")
public class Compras {
	
	   
	//Para importar ahora los id será desde MySQL, así que se agrega @Id
	@Id
	//Generando el valor con lo siguiente
	@GeneratedValue(strategy = GenerationType.IDENTITY)
		
	//Se coloca @Column con las propiedades que tendrán las columnas requeridas de MySQL
	@Column (name="id", unique=true,nullable=false)
	private Long id;
	
	@Column(name="fecha_compra")
	private String fecha_compra;
	
	@Column(name="fecha_entrega")
	private String fecha_entrega;
	
	@Column(name="cantidad_total",nullable=false)
	private Integer cantidad_total;
	
	@Column(name="precio_total",nullable=false)
	private Double precio_total;
	
	@Column(name="usuarios_id",nullable=false)
	private Long usuarios_id;
	
	@Column(name="estatus_entrega")
	private Integer estatus_entrega;
	
	public Compras() {}
	
	public Compras(Long id, String fecha_compra, String fecha_entrega, Integer cantidad_total, Double precio_total,
			Long usuarios_id, Integer estatus_entrega) {
		this.id = id;
		this.fecha_compra = fecha_compra;
		this.fecha_entrega = fecha_entrega;
		this.cantidad_total = cantidad_total;
		this.precio_total = precio_total;
		this.usuarios_id = usuarios_id;
		this.estatus_entrega = estatus_entrega;
	}
	
	public String getFecha_compra() {
		return fecha_compra;
	}

	public void setFecha_compra(String fecha_compra) {
		this.fecha_compra = fecha_compra;
	}

	public String getFecha_entrega() {
		return fecha_entrega;
	}

	public void setFecha_entrega(String fecha_entrega) {
		this.fecha_entrega = fecha_entrega;
	}

	public Integer getCantidad_total() {
		return cantidad_total;
	}

	public void setCantidad_total(Integer cantidad_total) {
		this.cantidad_total = cantidad_total;
	}

	public Double getPrecio_total() {
		return precio_total;
	}

	public void setPrecio_total(Double precio_total) {
		this.precio_total = precio_total;
	}

	public Long getUsuarios_id() {
		return usuarios_id;
	}

	public void setUsuarios_id(Long usuarios_id) {
		this.usuarios_id = usuarios_id;
	}

	public Integer getEstatus_entrega() {
		return estatus_entrega;
	}

	public void setEstatus_entrega(Integer estatus_entrega) {
		this.estatus_entrega = estatus_entrega;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Compras [id=" + id + ", fecha_compra=" + fecha_compra + ", fecha_entrega=" + fecha_entrega
				+ ", cantidad_total=" + cantidad_total + ", precio_total=" + precio_total + ", usuarios_id=" + usuarios_id
				+ ", estatus_entrega=" + estatus_entrega + "]";
	}
	
	
}