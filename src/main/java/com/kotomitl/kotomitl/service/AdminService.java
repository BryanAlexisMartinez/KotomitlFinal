package com.kotomitl.kotomitl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.kotomitl.kotomitl.model.Admin;
import com.kotomitl.kotomitl.model.ChangePassword;
import com.kotomitl.kotomitl.repository.AdminRepository;

//Indica que es un servicio
@Service
public class AdminService {

	private final AdminRepository varAdminRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	// Generar constructor para inicializarlo
	@Autowired
	public AdminService(AdminRepository varAdminRepository) {
		super();
		this.varAdminRepository = varAdminRepository;
	}

	// GET para regresar la lista de los administradores
	// http://localhost:8080/api/admins/
	public List<Admin> getAllAdmins() {
		return varAdminRepository.findAll();
	}// getAllAdmins

	// GET Admin por su id
	// http://localhost:8080/api/admins/2
	public Admin getAdmin(Long id) {
		// orElseTrhow lanza una excepción cuando no encuentre el id
		return varAdminRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("El Admin con el id [" + id + "]no existe"));
	}

	// DELETE eliminar admin por su id
	// http://localhost:8080/api/admins/2
	public Admin deleteAdmin(Long id) {
		Admin tmp = null;
		if (varAdminRepository.existsById(id)) {
			tmp = varAdminRepository.findById(id).get();
			varAdminRepository.deleteById(id);
		}
		return tmp;
	}

	// POST agregar admin
	/*
	 * http://localhost:8080/api/admins/ Usar en Body -> raw
	 * 
	 * { "nombre": "Administrador 4", "email": "admin4@kotomitl.com", "password":
	 * "Pa$$w000000000rdddd" }
	 * 
	 */
	public Admin addAdmin(Admin admin) {
		Admin tmp = null;
		if(varAdminRepository.findByEmail(admin.getEmail()).isEmpty()) {
			//cifrar la contraseña
			admin.setPassword(passwordEncoder.encode(admin.getPassword()));
			tmp = varAdminRepository.save(admin);	
		}else {
			System.out.println("Ya existe ["+admin.getEmail()+"] registrado");
		}
		return tmp;
	}

	// PUT actualizar datos
	// http://localhost:8080/api/admins/3
	// En Params
	// Key(Nombre de la variable a cambiar) Value(Nuevo valor a asignar)
	// nombre admin8
	// http://localhost:8080/api/admins/3?nombre=admin8
	public Admin updateAdmin(Long id, ChangePassword varChangePassword) {
		Admin tmp = null;
		if (varAdminRepository.existsById(id)) {
			tmp = varAdminRepository.findById(id).get();
			if (varChangePassword.getPassword() != null && varChangePassword.getNewPassword() != null) {
				//if (tmp.getPassword().equals(varChangePassword.getPassword())) {
				if(passwordEncoder.matches(varChangePassword.getPassword(), tmp.getPassword())) {	
				//tmp.setPassword(varChangePassword.getNewPassword());
					tmp.setPassword(passwordEncoder.encode(varChangePassword.getNewPassword()));
					varAdminRepository.save(tmp);
				} else {
					System.out.println("No coinciden las contraseñas");
					tmp = null;
				} // if password
			} // if !=null
		} else {
			System.out.println("Administrador con id [" + id + "] no existe");
		}
		return tmp;
	}

	public boolean validarAdmin(Admin admin) {
		
	Optional<Admin> adminByEmail = varAdminRepository.findByEmail(admin.getEmail());
		
	if (adminByEmail.isPresent()) {
		Admin user = adminByEmail.get();
		if(passwordEncoder.matches(admin.getPassword(),user.getPassword())) {
			return true;
		}
	}
	return false;
	}

}// getAdmin por su id
