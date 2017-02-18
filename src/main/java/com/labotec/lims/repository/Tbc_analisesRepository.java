package com.labotec.lims.repository;

import com.labotec.lims.domain.Tbc_analises;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tbc_analises entity.
 */
@SuppressWarnings("unused")
public interface Tbc_analisesRepository extends JpaRepository<Tbc_analises,Long> {

}
