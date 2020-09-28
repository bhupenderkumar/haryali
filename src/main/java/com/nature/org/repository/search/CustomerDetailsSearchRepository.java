package com.nature.org.repository.search;

import com.nature.org.domain.CustomerDetails;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link CustomerDetails} entity.
 */
public interface CustomerDetailsSearchRepository extends ElasticsearchRepository<CustomerDetails, Long> {
}
