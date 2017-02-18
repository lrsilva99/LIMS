package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_plano_testeService;
import com.labotec.lims.domain.Tbc_plano_teste;
import com.labotec.lims.repository.Tbc_plano_testeRepository;
import com.labotec.lims.repository.search.Tbc_plano_testeSearchRepository;
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
 * Service Implementation for managing Tbc_plano_teste.
 */
@Service
@Transactional
public class Tbc_plano_testeServiceImpl implements Tbc_plano_testeService{

    private final Logger log = LoggerFactory.getLogger(Tbc_plano_testeServiceImpl.class);
    
    private final Tbc_plano_testeRepository tbc_plano_testeRepository;

    private final Tbc_plano_testeSearchRepository tbc_plano_testeSearchRepository;

    public Tbc_plano_testeServiceImpl(Tbc_plano_testeRepository tbc_plano_testeRepository, Tbc_plano_testeSearchRepository tbc_plano_testeSearchRepository) {
        this.tbc_plano_testeRepository = tbc_plano_testeRepository;
        this.tbc_plano_testeSearchRepository = tbc_plano_testeSearchRepository;
    }

    /**
     * Save a tbc_plano_teste.
     *
     * @param tbc_plano_teste the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_plano_teste save(Tbc_plano_teste tbc_plano_teste) {
        log.debug("Request to save Tbc_plano_teste : {}", tbc_plano_teste);
        Tbc_plano_teste result = tbc_plano_testeRepository.save(tbc_plano_teste);
        tbc_plano_testeSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_plano_testes.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_plano_teste> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_plano_testes");
        Page<Tbc_plano_teste> result = tbc_plano_testeRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_plano_teste by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_plano_teste findOne(Long id) {
        log.debug("Request to get Tbc_plano_teste : {}", id);
        Tbc_plano_teste tbc_plano_teste = tbc_plano_testeRepository.findOne(id);
        return tbc_plano_teste;
    }

    /**
     *  Delete the  tbc_plano_teste by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_plano_teste : {}", id);
        tbc_plano_testeRepository.delete(id);
        tbc_plano_testeSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_plano_teste corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_plano_teste> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_plano_testes for query {}", query);
        Page<Tbc_plano_teste> result = tbc_plano_testeSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
