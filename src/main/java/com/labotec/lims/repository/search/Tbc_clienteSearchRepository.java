package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_cliente;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_cliente entity.
 */
public interface Tbc_clienteSearchRepository extends ElasticsearchRepository<Tbc_cliente, Long> {
}
