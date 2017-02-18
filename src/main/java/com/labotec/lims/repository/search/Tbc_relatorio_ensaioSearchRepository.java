package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_relatorio_ensaio;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_relatorio_ensaio entity.
 */
public interface Tbc_relatorio_ensaioSearchRepository extends ElasticsearchRepository<Tbc_relatorio_ensaio, Long> {
}
