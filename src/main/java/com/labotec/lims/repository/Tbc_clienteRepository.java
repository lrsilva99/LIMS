package com.labotec.lims.repository;

import com.labotec.lims.domain.Tbc_cliente;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tbc_cliente entity.
 */
@SuppressWarnings("unused")
public interface Tbc_clienteRepository extends JpaRepository<Tbc_cliente,Long> {

}
