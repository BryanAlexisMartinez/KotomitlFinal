package com.kotomitl.kotomitl.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="productos")
public class Productos {
	@Id
	//Generando el valor con lo siguiente
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="id", unique=true,nullable=false)
	private Long id;
	
	@Column (name="nombre",nullable=false)
	private String nombre;
	
	@Column (name="publico",nullable=false)
	private Integer publico;
	
	@Column (name="descripcion",nullable=false)
	private String descripcion;
	
	@Column (name="precio")	
	private Double precio;
	
	@Column (name="origen",nullable=false)	
	private String origen;
	
	@Column (name="color")	
	private Integer color;
	
	@Column (name="cantidad")	
	private Integer cantidad;
	
	@Column (name="talla")	
	private Integer talla;
	
	@Column (name="materiales",nullable=false)	
	private String materiales;
	
	@Column (name="sugerencia",nullable=false)	
	private String sugerencia;
	
	@Column (name="adicional",nullable=false)	
	private String adicional;
	
	@Column (name="imagen1",nullable=false, length = 100000)	
	private String imagen1;
	
	@Column (name="imagen2",nullable=false, length = 100000)	
	private String imagen2;
	
	@Column (name="imagen3",nullable=false, length = 100000)	
	private String imagen3;
	
	@Column (name="sku",nullable=false)	
	private String sku;
	
	@Column (name="tipo",nullable=false)	
	private String tipo;
	
	public Productos() {
	}

	public Productos(Long id, String nombre, Integer publico, String descripcion, Double precio, String origen,
			Integer color, Integer cantidad, Integer talla, String materiales, String sugerencia, String adicional,
			String imagen1, String imagen2, String imagen3, String sku, String tipo) {
		this.id = id;
		this.nombre = nombre;
		this.publico = publico;
		this.descripcion = descripcion;
		this.precio = precio;
		this.origen = origen;
		this.color = color;
		this.cantidad = cantidad;
		this.talla = talla;
		this.materiales = materiales;
		this.sugerencia = sugerencia;
		this.adicional = adicional;
		this.imagen1 = imagen1;
		this.imagen2 = imagen2;
		this.imagen3 = imagen3;
		this.sku=sku;
		this.tipo=tipo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getPublico() {
		return publico;
	}

	public void setPublico(Integer publico) {
		this.publico = publico;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public String getOrigen() {
		return origen;
	}

	public void setOrigen(String origen) {
		this.origen = origen;
	}

	public Integer getColor() {
		return color;
	}

	public void setColor(Integer color) {
		this.color = color;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Integer getTalla() {
		return talla;
	}

	public void setTalla(Integer talla) {
		this.talla = talla;
	}

	public String getMateriales() {
		return materiales;
	}

	public void setMateriales(String materiales) {
		this.materiales = materiales;
	}

	public String getSugerencia() {
		return sugerencia;
	}

	public void setSugerencia(String sugerencia) {
		this.sugerencia = sugerencia;
	}

	public String getAdicional() {
		return adicional;
	}

	public void setAdicional(String adicional) {
		this.adicional = adicional;
	}

	public String getImagen1() {
		return imagen1;
	}

	public void setImagen1(String imagen1) {
		this.imagen1 = imagen1;
	}

	public String getImagen2() {
		return imagen2;
	}

	public void setImagen2(String imagen2) {
		this.imagen2 = imagen2;
	}

	public String getImagen3() {
		return imagen3;
	}

	public void setImagen3(String imagen3) {
		this.imagen3 = imagen3;
	}
	
	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}
	
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Productos [id=" + id + ", nombre=" + nombre + ", publico=" + publico + ", descripcion=" + descripcion
				+ ", precio=" + precio + ", origen=" + origen + ", color=" + color + ", cantidad=" + cantidad
				+ ", talla=" + talla + ", materiales=" + materiales + ", sugerencia=" + sugerencia + ", adicional="
				+ adicional + ", imagen1=" + imagen1 + ", imagen2=" + imagen2 + ", imagen3=" + imagen3 +", sku=" + sku +", tipo=" + tipo + "]";
	}
	
}
