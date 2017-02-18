package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_grupo_clienteService;
import com.labotec.lims.domain.Tbc_grupo_cliente;
import com.labotec.lims.repository.Tbc_grupo_clienteRepository;
import com.labotec.lims.repository.search.Tbc_grupo_clienteSearchRepository;
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
 * Service Implementation for managing Tbc_grupo_cliente.
 */
@Service
@Transactional
public class Tbc_grupo_clienteServiceImpl implements Tbc_grupo_clienteService{

    private final Logger log = LoggerFactory.getLogger(Tbc_grupo_clienteServiceImpl.class);
    
    private final Tbc_grupo_clienteRepository tbc_grupo_clienteRepository;

    private final Tbc_grupo_clienteSearchRepository tbc_grupo_clienteSearchRepository;

    public Tbc_grupo_clienteServiceImpl(Tbc_grupo_clienteRepository tbc_grupo_clienteRepository, Tbc_grupo_clienteSearchRepository tbc_grupo_clienteSearchRepository) {
        this.tbc_grupo_clienteRepository = tbc_grupo_clienteRepository;
        this.tbc_grupo_clienteSearchRepository = tbc_grupo_clienteSearchRepository;
    }

    /**
     * Save a tbc_grupo_cliente.
     *
     * @param tbc_grupo_cliente the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_grupo_cliente save(Tbc_grupo_cliente tbc_grupo_cliente) {
        log.debug("Request to save Tbc_grupo_cliente : {}", tbc_grupo_cliente);
        Tbc_grupo_cliente result = tbc_grupo_clienteRepository.save(tbc_grupo_cliente);
        tbc_grupo_clienteSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_grupo_clientes.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_grupo_cliente> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_grupo_clientes");
        Page<Tbc_grupo_cliente> result = tbc_grupo_clienteRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_grupo_cliente by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_grupo_cliente findOne(Long id) {
        log.debug("Request to get Tbc_grupo_cliente : {}", id);
        Tbc_grupo_cliente tbc_grupo_cliente = tbc_grupo_clienteRepository.findOne(id);
        return tbc_grupo_cliente;
    }

    /**
     *  Delete the  tbc_grupo_cliente by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_grupo_cliente : {}", id);
        tbc_grupo_clienteRepository.delete(id);
        tbc_grupo_clienteSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_grupo_cliente corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_grupo_cliente> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_grupo_clientes for query {}", query);
        Page<Tbc_grupo_cliente> result = tbc_grupo_clienteSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
