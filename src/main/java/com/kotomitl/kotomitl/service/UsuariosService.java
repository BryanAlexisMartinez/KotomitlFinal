package com.kotomitl.kotomitl.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kotomitl.kotomitl.model.ChangePassword;
import com.kotomitl.kotomitl.model.Usuarios;
import com.kotomitl.kotomitl.repository.UsuariosRepository;

@Service
public class UsuariosService {

	private final UsuariosRepository varUsuariosRepository;
	
	@Autowired
	private PasswordEncoder varPasswordEncoder;

	// Generar constructor para inicializarlo
	@Autowired
	public UsuariosService(UsuariosRepository varUsuariosRepository) {
		super();
		this.varUsuariosRepository = varUsuariosRepository;
	}

	// GET TODAS LAS COMPRAS
	public List<Usuarios> getAllUsuarios() {
		return varUsuariosRepository.findAll();
	}

	// GET USER POR SU ID
	public Usuarios getUsuarios(Long id) {
		// orElseTrhow lanza una excepción cuando no encuentre el id
		return varUsuariosRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Usuario con el id [" + id + "]no existe"));
	}

	// DELETE USER POR SU ID
	public Usuarios deleteUsuarios(Long id) {
		Usuarios tmp = null;
		if (varUsuariosRepository.existsById(id)) {
			tmp = varUsuariosRepository.findById(id).get();
			varUsuariosRepository.deleteById(id);
		}
		return tmp;
	}

	//ADD NEW USER PUT
		public Usuarios addUsuario(Usuarios usuario) {
			Usuarios tmp = null;
			if(varUsuariosRepository.findByEmail(usuario.getEmail()).isEmpty()) {
				//cifra la contra
				usuario.setPassword(varPasswordEncoder.encode(usuario.getPassword()));
				tmp = varUsuariosRepository.save(usuario);
			} else {
				System.out.println("Ya existe un usuario con el correo: " + usuario.getEmail());
			}
			
			return tmp;
		}

	// PUT ACTUALIZAR DATOS PERSONALES DE USUARIO
	public Usuarios updateUsuario(Long id, String nombre, String apellido, String telefono, String email,
			ChangePassword varChangePassword, String domicilio, Integer estado) {
//	    Optional<Usuarios> usuarioOptional = varUsuariosRepository.findById(id);
		Usuarios tmp = null;

		if (varUsuariosRepository.existsById(id)) {
			tmp = varUsuariosRepository.findById(id).get();

			if (nombre != null)tmp.setNombre(nombre);
			if (apellido != null)tmp.setApellido(apellido);
			if (telefono != null)tmp.setTelefono(telefono);
			if (email != null)tmp.setEmail(email);
			if (varChangePassword.getPassword() != null && varChangePassword.getNewPassword() != null) {
				if (tmp.getPassword().equals(varChangePassword.getPassword())) {
					tmp.setPassword(varChangePassword.getNewPassword());
					varUsuariosRepository.save(tmp);
				} else {
					System.out.println("No coinciden las contraseñas");
					tmp = null;
				} // if password
			} // if !=null
			if (domicilio != null)
				tmp.setDomicilio(domicilio); // Actualizar el correo electrónico si se proporciona
			if (estado != null)
				tmp.setEstado(estado);
		} else {
			System.out.println("Usuario con id " + id + " no existe :(");
			tmp = null;
		}

		return tmp;
	}
}
