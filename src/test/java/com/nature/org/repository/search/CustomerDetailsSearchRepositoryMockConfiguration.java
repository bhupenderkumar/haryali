package com.nature.org.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link CustomerDetailsSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class CustomerDetailsSearchRepositoryMockConfiguration {

    @MockBean
    private CustomerDetailsSearchRepository mockCustomerDetailsSearchRepository;

}
