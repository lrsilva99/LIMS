package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_plano_teste_analiseService;
import com.labotec.lims.domain.Tbc_plano_teste_analise;
import com.labotec.lims.repository.Tbc_plano_teste_analiseRepository;
import com.labotec.lims.repository.search.Tbc_plano_teste_analiseSearchRepository;
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
 * Service Implementation for managing Tbc_plano_teste_analise.
 */
@Service
@Transactional
public class Tbc_plano_teste_analiseServiceImpl implements Tbc_plano_teste_analiseService{

    private final Logger log = LoggerFactory.getLogger(Tbc_plano_teste_analiseServiceImpl.class);
    
    private final Tbc_plano_teste_analiseRepository tbc_plano_teste_analiseRepository;

    private final Tbc_plano_teste_analiseSearchRepository tbc_plano_teste_analiseSearchRepository;

    public Tbc_plano_teste_analiseServiceImpl(Tbc_plano_teste_analiseRepository tbc_plano_teste_analiseRepository, Tbc_plano_teste_analiseSearchRepository tbc_plano_teste_analiseSearchRepository) {
        this.tbc_plano_teste_analiseRepository = tbc_plano_teste_analiseRepository;
        this.tbc_plano_teste_analiseSearchRepository = tbc_plano_teste_analiseSearchRepository;
    }

    /**
     * Save a tbc_plano_teste_analise.
     *
     * @param tbc_plano_teste_analise the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_plano_teste_analise save(Tbc_plano_teste_analise tbc_plano_teste_analise) {
        log.debug("Request to save Tbc_plano_teste_analise : {}", tbc_plano_teste_analise);
        Tbc_plano_teste_analise result = tbc_plano_teste_analiseRepository.save(tbc_plano_teste_analise);
        tbc_plano_teste_analiseSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_plano_teste_analises.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_plano_teste_analise> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_plano_teste_analises");
        Page<Tbc_plano_teste_analise> result = tbc_plano_teste_analiseRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_plano_teste_analise by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_plano_teste_analise findOne(Long id) {
        log.debug("Request to get Tbc_plano_teste_analise : {}", id);
        Tbc_plano_teste_analise tbc_plano_teste_analise = tbc_plano_teste_analiseRepository.findOne(id);
        return tbc_plano_teste_analise;
    }

    /**
     *  Delete the  tbc_plano_teste_analise by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_plano_teste_analise : {}", id);
        tbc_plano_teste_analiseRepository.delete(id);
        tbc_plano_teste_analiseSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_plano_teste_analise corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_plano_teste_analise> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_plano_teste_analises for query {}", query);
        Page<Tbc_plano_teste_analise> result = tbc_plano_teste_analiseSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
