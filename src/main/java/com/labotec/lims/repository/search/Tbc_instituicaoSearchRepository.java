package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_instituicao;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_instituicao entity.
 */
public interface Tbc_instituicaoSearchRepository extends ElasticsearchRepository<Tbc_instituicao, Long> {
}
