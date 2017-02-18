package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_analises;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_analises entity.
 */
public interface Tbc_analisesSearchRepository extends ElasticsearchRepository<Tbc_analises, Long> {
}
