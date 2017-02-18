package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_sub_grupo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_sub_grupo entity.
 */
public interface Tbc_sub_grupoSearchRepository extends ElasticsearchRepository<Tbc_sub_grupo, Long> {
}
