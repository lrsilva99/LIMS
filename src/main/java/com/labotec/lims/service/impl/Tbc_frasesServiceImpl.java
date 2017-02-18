package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_frasesService;
import com.labotec.lims.domain.Tbc_frases;
import com.labotec.lims.repository.Tbc_frasesRepository;
import com.labotec.lims.repository.search.Tbc_frasesSearchRepository;
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
 * Service Implementation for managing Tbc_frases.
 */
@Service
@Transactional
public class Tbc_frasesServiceImpl implements Tbc_frasesService{

    private final Logger log = LoggerFactory.getLogger(Tbc_frasesServiceImpl.class);
    
    private final Tbc_frasesRepository tbc_frasesRepository;

    private final Tbc_frasesSearchRepository tbc_frasesSearchRepository;

    public Tbc_frasesServiceImpl(Tbc_frasesRepository tbc_frasesRepository, Tbc_frasesSearchRepository tbc_frasesSearchRepository) {
        this.tbc_frasesRepository = tbc_frasesRepository;
        this.tbc_frasesSearchRepository = tbc_frasesSearchRepository;
    }

    /**
     * Save a tbc_frases.
     *
     * @param tbc_frases the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_frases save(Tbc_frases tbc_frases) {
        log.debug("Request to save Tbc_frases : {}", tbc_frases);
        Tbc_frases result = tbc_frasesRepository.save(tbc_frases);
        tbc_frasesSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_frases.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_frases> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_frases");
        Page<Tbc_frases> result = tbc_frasesRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_frases by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_frases findOne(Long id) {
        log.debug("Request to get Tbc_frases : {}", id);
        Tbc_frases tbc_frases = tbc_frasesRepository.findOne(id);
        return tbc_frases;
    }

    /**
     *  Delete the  tbc_frases by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_frases : {}", id);
        tbc_frasesRepository.delete(id);
        tbc_frasesSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_frases corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_frases> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_frases for query {}", query);
        Page<Tbc_frases> result = tbc_frasesSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
