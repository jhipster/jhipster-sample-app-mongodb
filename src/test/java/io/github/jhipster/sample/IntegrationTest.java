package io.github.jhipster.sample;

import io.github.jhipster.sample.JhipsterMongodbSampleApplicationApp;
import io.github.jhipster.sample.config.EmbeddedMongo;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = JhipsterMongodbSampleApplicationApp.class)
@EmbeddedMongo
public @interface IntegrationTest {
}
