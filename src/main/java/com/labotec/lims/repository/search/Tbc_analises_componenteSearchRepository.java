package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_analises_componente;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_analises_componente entity.
 */
public interface Tbc_analises_componenteSearchRepository extends ElasticsearchRepository<Tbc_analises_componente, Long> {
}
