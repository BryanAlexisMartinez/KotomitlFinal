package com.kotomitl.kotomitl.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kotomitl.kotomitl.model.Productos;
import com.kotomitl.kotomitl.repository.ProductosRepository;

@Service
public class ProductoService{

	private final ProductosRepository varProductosRepository;

	@Autowired
	public ProductoService(ProductosRepository varProductosRepository) {
		super();
		this.varProductosRepository = varProductosRepository;
	}

	// GET para regresar la lista de los productos
	// http://localhost:8080/api/productos/
	public List<Productos> getAllProductos() {
		return varProductosRepository.findAll();
	}// getAll

	// GET Productos por su id
	// http://localhost:8080/api/productos/2
	public Productos getProducto(Long id) {
		// orElseTrhow lanza una excepción cuando no encuentre el id
		return varProductosRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("El Producto con el id [" + id + "]no existe"));
	}

	// DELETE eliminar prod por su id
	public Productos deleteProducto(Long id) {
		Productos tmp = null;
		if (varProductosRepository.existsById(id)) {
			tmp = varProductosRepository.findById(id).get();
			varProductosRepository.deleteById(id);
		}
		return tmp;
	}
	
	//POST 
	public Productos addProducto(Productos producto) {
		Productos tmp = null;
		if(varProductosRepository.findBySku(producto.getSku()).isEmpty()) {
			tmp = varProductosRepository.save(producto);	
		}else {
			System.out.println("Ya existe el producto con SKU ["+producto.getSku()+"]");
		}
		return tmp;
	}
	
	// PUT ACTUALIZAR DATOS DEL PRODUCTO
		public Productos updateProducto(Long id,String nombre, Integer publico, String descripcion, Double precio, String origen,
				Integer color, Integer cantidad, Integer talla, String materiales, String sugerencia, String adicional,
				String imagen1, String imagen2, String imagen3, String sku, String tipo) {

			Productos tmp = null;

			if (varProductosRepository.existsById(id)) {
				tmp = varProductosRepository.findById(id).get();

				if (nombre != null)tmp.setNombre(nombre);
				if (publico != null)tmp.setPublico(publico);
				if (descripcion != null)tmp.setDescripcion(descripcion);
				if (precio!= null)tmp.setPrecio(precio);
				if (origen!= null)tmp.setOrigen(origen);
				if (color != null)tmp.setColor(color);
				if (cantidad != null)tmp.setCantidad(cantidad);
				if (talla != null)tmp.setTalla(talla);
				if (materiales != null)tmp.setMateriales(materiales);
				if (sugerencia != null)tmp.setSugerencia(sugerencia);
				if (adicional != null)tmp.setAdicional(adicional);
				if (imagen1!= null)tmp.setImagen1(imagen1);
				if (imagen2 != null)tmp.setImagen2(imagen2);
				if (imagen3!= null)tmp.setImagen3(imagen3);
				if (sku != null)tmp.setSku(sku);
				if (tipo != null)tmp.setTipo(tipo);
				
				varProductosRepository.save(tmp);
			} else {
				System.out.println("Producto con id " + id + " no existe :(");
				tmp = null;
			}

			return tmp;
		}
}
