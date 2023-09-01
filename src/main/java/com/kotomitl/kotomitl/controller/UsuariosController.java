package com.kotomitl.kotomitl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kotomitl.kotomitl.model.ChangePassword;
import com.kotomitl.kotomitl.model.Usuarios;
import com.kotomitl.kotomitl.service.UsuariosService;

@RestController
@RequestMapping("/api/usuarios/")
public class UsuariosController {

	private final UsuariosService varUsuariosService;
	private final BCryptPasswordEncoder passwordEncoder;
	
	
	 @Autowired
	    public UsuariosController(UsuariosService usuariosService, BCryptPasswordEncoder passwordEncoder) {
	        this.varUsuariosService = usuariosService;
	        this.passwordEncoder = passwordEncoder;
	 }
	
	//GET ALL SHOPPING
	@GetMapping
	public List<Usuarios> getAllUsuarios(){
		return varUsuariosService.getAllUsuarios();
	}
	
	//GET COMPRA POR SU ID
	@GetMapping(path = "{usuarioId}")
	public Usuarios getUsuarios(@PathVariable ("usuarioId") Long id) {
		return varUsuariosService.getUsuarios(id);
	}
	

	
	//DELETE COMPRA POR SU ID
	@DeleteMapping(path = "{usuarioId}")
	public Usuarios deleteUsuarios(@PathVariable("usuarioId") Long id) {
		return varUsuariosService.deleteUsuarios(id);
	}
	
	
	//POST AGREGAR COMPRAS
	/*
	 {
        "cantidadTotal": 12,
        "direccion": "Calle La Calandria",
        "precioTotal": 2589.99
    } 

	 * */
	@PostMapping
	public Usuarios addUsuarios(@RequestBody Usuarios usuario) {
		return varUsuariosService.addUsuario(usuario);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
	    Usuarios usuario = varUsuariosService.getByEmail(email);

	    if (usuario != null && passwordEncoder.matches(password, usuario.getPassword())) {
	        return ResponseEntity.ok("Inicio de sesión exitoso");
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
	    }
	}

	
	
	//PUT CAMBIAR PASSWORD
		@PutMapping(path = "{usuarioId}")
		public Usuarios updateUsuario(@PathVariable ("usuarioId") Long id,
				@RequestParam(required = false) String nombre,
				@RequestParam(required = false) String apellido,
				@RequestParam(required = false) String telefono,
				@RequestParam(required = false) String email,
				@RequestBody ChangePassword varChangePassword,
				@RequestParam(required = false) String domicilio,
				@RequestParam(required = false) Integer estado){
			return varUsuariosService.updateUsuario(id,nombre, apellido, telefono,email, varChangePassword, domicilio,estado);		
		}
		
}
