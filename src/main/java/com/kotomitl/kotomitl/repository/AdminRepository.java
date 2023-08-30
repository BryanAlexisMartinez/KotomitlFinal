package com.kotomitl.kotomitl.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kotomitl.kotomitl.model.Admin;

@Repository
//Jpa es un CRUD con los metodos necesarios para crear, leer, borrar y actualizar
public interface AdminRepository extends JpaRepository<Admin, Long> {
	//Generamos un metodo que nos sirva para detectar duplicados indeseados en campos importantes
	Optional<Admin> findByEmail(String Email);
}
