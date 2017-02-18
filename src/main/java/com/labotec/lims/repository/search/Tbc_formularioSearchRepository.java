package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_formulario;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_formulario entity.
 */
public interface Tbc_formularioSearchRepository extends ElasticsearchRepository<Tbc_formulario, Long> {
}
