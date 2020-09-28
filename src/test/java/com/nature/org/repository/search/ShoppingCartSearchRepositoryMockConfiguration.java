package com.nature.org.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link ShoppingCartSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class ShoppingCartSearchRepositoryMockConfiguration {

    @MockBean
    private ShoppingCartSearchRepository mockShoppingCartSearchRepository;

}
