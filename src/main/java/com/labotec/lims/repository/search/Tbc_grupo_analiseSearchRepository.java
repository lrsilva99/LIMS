package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_grupo_analise;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_grupo_analise entity.
 */
public interface Tbc_grupo_analiseSearchRepository extends ElasticsearchRepository<Tbc_grupo_analise, Long> {
}
