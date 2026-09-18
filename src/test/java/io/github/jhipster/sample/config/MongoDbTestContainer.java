package io.github.jhipster.sample.config;

import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.context.annotation.Bean;
import org.testcontainers.containers.output.Slf4jLogConsumer;
import org.testcontainers.mongodb.MongoDBContainer;

@TestConfiguration(proxyBeanMethods = false)
public class MongoDbTestContainer {

    private static final MongoDBContainer MONGO_DB_CONTAINER = new MongoDBContainer("mongo:8.3.11").withLogConsumer(
        new Slf4jLogConsumer(LoggerFactory.getLogger(MongoDbTestContainer.class))
    );

    @Bean
    @ServiceConnection
    MongoDBContainer mongoDbContainer() {
        return MONGO_DB_CONTAINER;
    }
}
