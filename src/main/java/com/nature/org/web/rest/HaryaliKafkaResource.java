package com.nature.org.web.rest;

import com.nature.org.service.HaryaliKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/haryali-kafka")
public class HaryaliKafkaResource {

    private final Logger log = LoggerFactory.getLogger(HaryaliKafkaResource.class);

    private HaryaliKafkaProducer kafkaProducer;

    public HaryaliKafkaResource(HaryaliKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.sendMessage(message);
    }
}
