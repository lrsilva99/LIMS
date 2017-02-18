package com.labotec.lims.repository.search;

import com.labotec.lims.domain.Tbc_report;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tbc_report entity.
 */
public interface Tbc_reportSearchRepository extends ElasticsearchRepository<Tbc_report, Long> {
}
