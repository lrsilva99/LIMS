package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_analisesService;
import com.labotec.lims.domain.Tbc_analises;
import com.labotec.lims.repository.Tbc_analisesRepository;
import com.labotec.lims.repository.search.Tbc_analisesSearchRepository;
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
 * Service Implementation for managing Tbc_analises.
 */
@Service
@Transactional
public class Tbc_analisesServiceImpl implements Tbc_analisesService{

    private final Logger log = LoggerFactory.getLogger(Tbc_analisesServiceImpl.class);
    
    private final Tbc_analisesRepository tbc_analisesRepository;

    private final Tbc_analisesSearchRepository tbc_analisesSearchRepository;

    public Tbc_analisesServiceImpl(Tbc_analisesRepository tbc_analisesRepository, Tbc_analisesSearchRepository tbc_analisesSearchRepository) {
        this.tbc_analisesRepository = tbc_analisesRepository;
        this.tbc_analisesSearchRepository = tbc_analisesSearchRepository;
    }

    /**
     * Save a tbc_analises.
     *
     * @param tbc_analises the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_analises save(Tbc_analises tbc_analises) {
        log.debug("Request to save Tbc_analises : {}", tbc_analises);
        Tbc_analises result = tbc_analisesRepository.save(tbc_analises);
        tbc_analisesSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_analises.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_analises> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_analises");
        Page<Tbc_analises> result = tbc_analisesRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_analises by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_analises findOne(Long id) {
        log.debug("Request to get Tbc_analises : {}", id);
        Tbc_analises tbc_analises = tbc_analisesRepository.findOne(id);
        return tbc_analises;
    }

    /**
     *  Delete the  tbc_analises by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_analises : {}", id);
        tbc_analisesRepository.delete(id);
        tbc_analisesSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_analises corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_analises> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_analises for query {}", query);
        Page<Tbc_analises> result = tbc_analisesSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
