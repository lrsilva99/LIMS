package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_plano_teste;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_plano_teste entity.
 */
public interface Tbc_plano_testeSearchRepository extends ElasticsearchRepository<Tbc_plano_teste, Long> {
}
