package com.labotec.lims.service.impl;

import com.labotec.lims.service.Tbc_formularioService;
import com.labotec.lims.domain.Tbc_formulario;
import com.labotec.lims.repository.Tbc_formularioRepository;
import com.labotec.lims.repository.search.Tbc_formularioSearchRepository;
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
 * Service Implementation for managing Tbc_formulario.
 */
@Service
@Transactional
public class Tbc_formularioServiceImpl implements Tbc_formularioService{

    private final Logger log = LoggerFactory.getLogger(Tbc_formularioServiceImpl.class);
    
    private final Tbc_formularioRepository tbc_formularioRepository;

    private final Tbc_formularioSearchRepository tbc_formularioSearchRepository;

    public Tbc_formularioServiceImpl(Tbc_formularioRepository tbc_formularioRepository, Tbc_formularioSearchRepository tbc_formularioSearchRepository) {
        this.tbc_formularioRepository = tbc_formularioRepository;
        this.tbc_formularioSearchRepository = tbc_formularioSearchRepository;
    }

    /**
     * Save a tbc_formulario.
     *
     * @param tbc_formulario the entity to save
     * @return the persisted entity
     */
    @Override
    public Tbc_formulario save(Tbc_formulario tbc_formulario) {
        log.debug("Request to save Tbc_formulario : {}", tbc_formulario);
        Tbc_formulario result = tbc_formularioRepository.save(tbc_formulario);
        tbc_formularioSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tbc_formularios.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_formulario> findAll(Pageable pageable) {
        log.debug("Request to get all Tbc_formularios");
        Page<Tbc_formulario> result = tbc_formularioRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tbc_formulario by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Tbc_formulario findOne(Long id) {
        log.debug("Request to get Tbc_formulario : {}", id);
        Tbc_formulario tbc_formulario = tbc_formularioRepository.findOne(id);
        return tbc_formulario;
    }

    /**
     *  Delete the  tbc_formulario by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tbc_formulario : {}", id);
        tbc_formularioRepository.delete(id);
        tbc_formularioSearchRepository.delete(id);
    }

    /**
     * Search for the tbc_formulario corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Tbc_formulario> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tbc_formularios for query {}", query);
        Page<Tbc_formulario> result = tbc_formularioSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}
