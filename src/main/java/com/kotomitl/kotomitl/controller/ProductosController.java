package com.kotomitl.kotomitl.controller;

import java.sql.Blob;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kotomitl.kotomitl.model.Productos;
import com.kotomitl.kotomitl.service.ProductoService;

@RestController
@RequestMapping("/api/productos/")
public class ProductosController {

	private final ProductoService varProductoService;
	
	@Autowired
	public ProductosController(ProductoService ProductoService) {
		this.varProductoService = ProductoService;
	}
	
	//GET ALL SHOPPING
	@GetMapping
	public List<Productos> getAllProductos(){
		return varProductoService.getAllProductos();
	}
	
	//GET COMPRA POR SU ID
	@GetMapping(path = "{productoId}")
	public Productos getProducto(@PathVariable ("productoId") Long id) {
		return varProductoService.getProducto(id);
	}
	
	//DELETE COMPRA POR SU ID
	@DeleteMapping(path = "{productoId}")
	public Productos deleteProducto(@PathVariable("productoId") Long id) {
		return varProductoService.deleteProducto(id);
	}
	
	
	//POST 
	@PostMapping
	public Productos addProducto(@RequestBody Productos producto) {
		return varProductoService.addProducto(producto);
	}
	
	
	//PUT CAMBIAR PASSWORD
		@PutMapping(path = "{productoId}")
		public Productos updateProducto(
				@PathVariable ("productoId") Long id,				
				@RequestParam(required = false) String nombre,
				@RequestParam(required = false) Integer publico,
				@RequestParam(required = false) String descripcion,
				@RequestParam(required = false) Double precio,
				@RequestParam(required = false) String origen,
				@RequestParam(required = false) Integer color,
				@RequestParam(required = false) Integer cantidad,
				@RequestParam(required = false) Integer talla,
				@RequestParam(required = false) String materiales,
				@RequestParam(required = false) String sugerencia,
				@RequestParam(required = false) String adicional,
				@RequestParam(required = false) Blob imagen1,
				@RequestParam(required = false) Blob imagen2,
				@RequestParam(required = false) Blob imagen3,
				@RequestParam(required = false) String sku,
				@RequestParam(required = false) String tipo){
			return varProductoService.updateProducto(id,nombre, publico, descripcion, precio, origen, color, cantidad, talla, materiales, sugerencia,
					adicional, imagen1, imagen2,imagen3, sku, tipo);		
		}
		
}
