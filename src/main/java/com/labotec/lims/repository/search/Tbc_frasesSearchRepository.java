package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_frases;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_frases entity.
 */
public interface Tbc_frasesSearchRepository extends ElasticsearchRepository<Tbc_frases, Long> {
}
