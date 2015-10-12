package com.mycompany.myapp.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.annotation.*;
import org.springframework.data.mongodb.MongoDbFactory;


@Configuration
@Profile(Constants.SPRING_PROFILE_CLOUD)
public class CloudDatabaseConfiguration extends AbstractCloudConfig {

    private final Logger log = LoggerFactory.getLogger(CloudDatabaseConfiguration.class);

    @Bean
    public MongoDbFactory mongoDbFactory() {
        log.info("Configuring MongoDB datasource from a cloud provider");
        return connectionFactory().mongoDbFactory();
    }
}
