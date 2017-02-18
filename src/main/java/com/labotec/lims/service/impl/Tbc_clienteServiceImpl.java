package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_clienteService;
import com.labotec.lims.domain.Tbc_cliente;
import com.labotec.lims.repository.Tbc_clienteRepository;
import com.labotec.lims.repository.search.Tbc_clienteSearchRepository;
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
 * Service Implementation for managing Tbc_cliente.
 */
@Service
@Transactional
public class Tbc_clienteServiceImpl implements Tbc_clienteService{

    private final Logger log = LoggerFactory.getLogger(Tbc_clienteServiceImpl.class);
    
    private final Tbc_clienteRepository tbc_clienteRepository;

    private final Tbc_clienteSearchRepository tbc_clienteSearchRepository;

    public Tbc_clienteServiceImpl(Tbc_clienteRepository tbc_clienteRepository, Tbc_clienteSearchRepository tbc_clienteSearchRepository) {
        this.tbc_clienteRepository = tbc_clienteRepository;
        this.tbc_clienteSearchRepository = tbc_clienteSearchRepository;
    }

    /**
     * Save a tbc_cliente.
     *
     * @param tbc_cliente the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_cliente save(Tbc_cliente tbc_cliente) {
        log.debug("Request to save Tbc_cliente : {}", tbc_cliente);
        Tbc_cliente result = tbc_clienteRepository.save(tbc_cliente);
        tbc_clienteSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_clientes.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_cliente> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_clientes");
        Page<Tbc_cliente> result = tbc_clienteRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_cliente by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_cliente findOne(Long id) {
        log.debug("Request to get Tbc_cliente : {}", id);
        Tbc_cliente tbc_cliente = tbc_clienteRepository.findOne(id);
        return tbc_cliente;
    }

    /**
     *  Delete the  tbc_cliente by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_cliente : {}", id);
        tbc_clienteRepository.delete(id);
        tbc_clienteSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_cliente corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_cliente> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_clientes for query {}", query);
        Page<Tbc_cliente> result = tbc_clienteSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
