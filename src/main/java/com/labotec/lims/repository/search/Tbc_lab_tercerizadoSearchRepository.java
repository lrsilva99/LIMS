package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_lab_tercerizado;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_lab_tercerizado entity.
 */
public interface Tbc_lab_tercerizadoSearchRepository extends ElasticsearchRepository<Tbc_lab_tercerizado, Long> {
}
