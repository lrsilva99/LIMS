package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_tipo_cadastro;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_tipo_cadastro entity.
 */
public interface Tbc_tipo_cadastroSearchRepository extends ElasticsearchRepository<Tbc_tipo_cadastro, Long> {
}
