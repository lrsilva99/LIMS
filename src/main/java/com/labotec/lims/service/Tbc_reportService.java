package com.labotec.lims.service;

import com.labotec.lims.domain.Tbc_report;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

/**
 * Service Interface for managing Tbc_report.
 */
public interface Tbc_reportService {

    /**
     * Save a tbc_report.
     *
     * @param tbc_report the entity to save
     * @return the persisted entity
     */
    Tbc_report save(Tbc_report tbc_report);

    /**
     *  Get all the tbc_reports.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<Tbc_report> findAll(Pageable pageable);

    /**
     *  Get the "id" tbc_report.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    Tbc_report findOne(Long id);

    /**
     *  Delete the "id" tbc_report.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the tbc_report corresponding to the query.
     *
     *  @param query the query of the search
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<Tbc_report> search(String query, Pageable pageable);
}
