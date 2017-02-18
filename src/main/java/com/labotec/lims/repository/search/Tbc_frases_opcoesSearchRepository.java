package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_frases_opcoes;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_frases_opcoes entity.
 */
public interface Tbc_frases_opcoesSearchRepository extends ElasticsearchRepository<Tbc_frases_opcoes, Long> {
}
