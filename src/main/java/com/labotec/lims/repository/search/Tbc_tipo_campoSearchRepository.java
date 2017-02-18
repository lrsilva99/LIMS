package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_tipo_campo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_tipo_campo entity.
 */
public interface Tbc_tipo_campoSearchRepository extends ElasticsearchRepository<Tbc_tipo_campo, Long> {
}
