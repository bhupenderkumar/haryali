package com.nature.org.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class HaryaliKafkaConsumer {

    private final Logger log = LoggerFactory.getLogger(HaryaliKafkaConsumer.class);
    private static final String TOPIC = "topic_haryali";

    @KafkaListener(topics = "topic_haryali", groupId = "group_id")
    public void consume(String message) throws IOException {
        log.info("Consumed message in {} : {}", TOPIC, message);
    }
}
