package com.labotec.lims.repository;

import com.labotec.lims.domain.Tbc_report;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tbc_report entity.
 */
@SuppressWarnings("unused")
public interface Tbc_reportRepository extends JpaRepository<Tbc_report,Long> {

}
