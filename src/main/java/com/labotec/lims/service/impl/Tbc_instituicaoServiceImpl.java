package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_instituicaoService;
import com.labotec.lims.domain.Tbc_instituicao;
import com.labotec.lims.repository.Tbc_instituicaoRepository;
import com.labotec.lims.repository.search.Tbc_instituicaoSearchRepository;
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
 * Service Implementation for managing Tbc_instituicao.
 */
@Service
@Transactional
public class Tbc_instituicaoServiceImpl implements Tbc_instituicaoService{

    private final Logger log = LoggerFactory.getLogger(Tbc_instituicaoServiceImpl.class);
    
    private final Tbc_instituicaoRepository tbc_instituicaoRepository;

    private final Tbc_instituicaoSearchRepository tbc_instituicaoSearchRepository;

    public Tbc_instituicaoServiceImpl(Tbc_instituicaoRepository tbc_instituicaoRepository, Tbc_instituicaoSearchRepository tbc_instituicaoSearchRepository) {
        this.tbc_instituicaoRepository = tbc_instituicaoRepository;
        this.tbc_instituicaoSearchRepository = tbc_instituicaoSearchRepository;
    }

    /**
     * Save a tbc_instituicao.
     *
     * @param tbc_instituicao the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_instituicao save(Tbc_instituicao tbc_instituicao) {
        log.debug("Request to save Tbc_instituicao : {}", tbc_instituicao);
        Tbc_instituicao result = tbc_instituicaoRepository.save(tbc_instituicao);
        tbc_instituicaoSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_instituicaos.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_instituicao> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_instituicaos");
        Page<Tbc_instituicao> result = tbc_instituicaoRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_instituicao by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_instituicao findOne(Long id) {
        log.debug("Request to get Tbc_instituicao : {}", id);
        Tbc_instituicao tbc_instituicao = tbc_instituicaoRepository.findOne(id);
        return tbc_instituicao;
    }

    /**
     *  Delete the  tbc_instituicao by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_instituicao : {}", id);
        tbc_instituicaoRepository.delete(id);
        tbc_instituicaoSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_instituicao corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_instituicao> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_instituicaos for query {}", query);
        Page<Tbc_instituicao> result = tbc_instituicaoSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
