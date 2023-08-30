package com.kotomitl.kotomitl.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kotomitl.kotomitl.model.Usuarios;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {
	//Generamos un metodo que nos sirva para detectar duplicados indeseados en campos importantes
		Optional<Usuarios> findByEmail(String Email);
}
