package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_reportService;
import com.labotec.lims.domain.Tbc_report;
import com.labotec.lims.repository.Tbc_reportRepository;
import com.labotec.lims.repository.search.Tbc_reportSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Tbc_report.
 */
@Service
@Transactional
public class Tbc_reportServiceImpl implements Tbc_reportService{

    private final Logger log = LoggerFactory.getLogger(Tbc_reportServiceImpl.class);
    
    private final Tbc_reportRepository tbc_reportRepository;

    private final Tbc_reportSearchRepository tbc_reportSearchRepository;

    public Tbc_reportServiceImpl(Tbc_reportRepository tbc_reportRepository, Tbc_reportSearchRepository tbc_reportSearchRepository) {
        this.tbc_reportRepository = tbc_reportRepository;
        this.tbc_reportSearchRepository = tbc_reportSearchRepository;
    }

    /**
     * Save a tbc_report.
     *
     * @param tbc_report the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_report save(Tbc_report tbc_report) {
        log.debug("Request to save Tbc_report : {}", tbc_report);
        Tbc_report result = tbc_reportRepository.save(tbc_report);
        tbc_reportSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_reports.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_report> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_reports");
        Page<Tbc_report> result = tbc_reportRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_report by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_report findOne(Long id) {
        log.debug("Request to get Tbc_report : {}", id);
        Tbc_report tbc_report = tbc_reportRepository.findOne(id);
        return tbc_report;
    }

    /**
     *  Delete the  tbc_report by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_report : {}", id);
        tbc_reportRepository.delete(id);
        tbc_reportSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_report corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_report> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_reports for query {}", query);
        Page<Tbc_report> result = tbc_reportSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
