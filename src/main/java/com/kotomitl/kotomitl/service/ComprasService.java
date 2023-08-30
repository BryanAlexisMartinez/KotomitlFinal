package com.kotomitl.kotomitl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kotomitl.kotomitl.model.Compras;
import com.kotomitl.kotomitl.repository.ComprasRepository;

@Service
public class ComprasService {
	
	private final ComprasRepository varComprasRepository;
	
	@Autowired
	public ComprasService(ComprasRepository varComprasRepository) {
		super();
		this.varComprasRepository = varComprasRepository;
	}

	
	// GET para regresar la lista deCompras
		// http://localhost:8080/api/compras/
		public List<Compras> getAllCompras() {
			return varComprasRepository.findAll();
		}// getAllComprass

		// GET Compras por su id
		// http://localhost:8080/api/Comprass/2
		public Compras getCompras(Long id) {
			// orElseTrhow lanza una excepción cuando no encuentre el id
			return varComprasRepository.findById(id)
					.orElseThrow(() -> new IllegalArgumentException("Compra con el id [" + id + "]no existe"));
		}

		// DELETE eliminar Compras por su id
		public Compras deleteCompras(Long id) {
			Compras tmp = null;
			if (varComprasRepository.existsById(id)) {
				tmp = varComprasRepository.findById(id).get();
				varComprasRepository.deleteById(id);
			}
			return tmp;
		}

		// POST agregar Compras
		public Compras addCompras(Compras compra) {
			return varComprasRepository.save(compra);
		}

		// PUT actualizar datos
			public Compras updateCompras(Long id, String fecha_compra, String fecha_entrega, Integer cantidad_total, Double precio_total, Long usuarios_id, Integer estatus_entrega) {
				Compras tmp = null;

				if (varComprasRepository.existsById(id)) {
					tmp = varComprasRepository.findById(id).get();
					
					if(fecha_compra!=null)tmp.setFecha_compra(fecha_compra);
					if(fecha_entrega!=null)tmp.setFecha_entrega(fecha_entrega);
					if(cantidad_total !=null)tmp.setCantidad_total(cantidad_total);
					if(precio_total != null) tmp.setPrecio_total(precio_total);
					if(usuarios_id != null) tmp.setUsuarios_id(usuarios_id);
					if(estatus_entrega !=null) tmp.setEstatus_entrega(estatus_entrega);
					
					varComprasRepository.save(tmp);
				}else {
					System.out.println("Compra con id ["+id+"] no localizada");
				}
				return tmp;
		}

	}// getCompras por su id
