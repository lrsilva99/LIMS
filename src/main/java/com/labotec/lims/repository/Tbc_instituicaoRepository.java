package com.labotec.lims.repository;

import com.labotec.lims.domain.Tbc_instituicao;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tbc_instituicao entity.
 */
@SuppressWarnings("unused")
public interface Tbc_instituicaoRepository extends JpaRepository<Tbc_instituicao,Long> {

}
