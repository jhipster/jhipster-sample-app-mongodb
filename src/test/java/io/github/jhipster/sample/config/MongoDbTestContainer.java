package io.github.jhipster.sample.config;

import org.slf4j.LoggerFactory;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.output.Slf4jLogConsumer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.mongodb.MongoDBContainer;

public interface MongoDbTestContainer {
    @Container
    MongoDBContainer mongoDbContainer = new MongoDBContainer("mongo:8.2.4").withLogConsumer(
        new Slf4jLogConsumer(LoggerFactory.getLogger(MongoDbTestContainer.class))
    );

    @DynamicPropertySource
    static void registerProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.mongodb.uri", mongoDbContainer::getReplicaSetUrl);
    }
}
