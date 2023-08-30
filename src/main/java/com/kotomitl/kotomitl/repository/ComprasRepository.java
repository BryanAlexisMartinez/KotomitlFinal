package com.kotomitl.kotomitl.repository;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kotomitl.kotomitl.model.Compras;

@Repository
public interface ComprasRepository extends JpaRepository<Compras, Long> {
	//Generamos un metodo que nos sirva para detectar duplicados indeseados en campos importantes
	//Optional<Usuarios> findByEmail(String Email);
}
