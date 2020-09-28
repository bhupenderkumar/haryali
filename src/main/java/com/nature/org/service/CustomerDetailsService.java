package com.nature.org.service;

import com.nature.org.domain.CustomerDetails;
import com.nature.org.repository.CustomerDetailsRepository;
import com.nature.org.repository.search.CustomerDetailsSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link CustomerDetails}.
 */
@Service
@Transactional
public class CustomerDetailsService {

    private final Logger log = LoggerFactory.getLogger(CustomerDetailsService.class);

    private final CustomerDetailsRepository customerDetailsRepository;

    private final CustomerDetailsSearchRepository customerDetailsSearchRepository;

    public CustomerDetailsService(CustomerDetailsRepository customerDetailsRepository, CustomerDetailsSearchRepository customerDetailsSearchRepository) {
        this.customerDetailsRepository = customerDetailsRepository;
        this.customerDetailsSearchRepository = customerDetailsSearchRepository;
    }

    /**
     * Save a customerDetails.
     *
     * @param customerDetails the entity to save.
     * @return the persisted entity.
     */
    public CustomerDetails save(CustomerDetails customerDetails) {
        log.debug("Request to save CustomerDetails : {}", customerDetails);
        CustomerDetails result = customerDetailsRepository.save(customerDetails);
        customerDetailsSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the customerDetails.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<CustomerDetails> findAll(Pageable pageable) {
        log.debug("Request to get all CustomerDetails");
        return customerDetailsRepository.findAll(pageable);
    }


    /**
     * Get one customerDetails by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<CustomerDetails> findOne(Long id) {
        log.debug("Request to get CustomerDetails : {}", id);
        return customerDetailsRepository.findById(id);
    }

    /**
     * Delete the customerDetails by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete CustomerDetails : {}", id);
        customerDetailsRepository.deleteById(id);
        customerDetailsSearchRepository.deleteById(id);
    }

    /**
     * Search for the customerDetails corresponding to the query.
     *
     * @param query the query of the search.
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<CustomerDetails> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of CustomerDetails for query {}", query);
        return customerDetailsSearchRepository.search(queryStringQuery(query), pageable);    }
}
