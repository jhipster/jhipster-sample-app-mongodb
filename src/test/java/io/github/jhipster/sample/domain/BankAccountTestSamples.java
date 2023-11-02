package io.github.jhipster.sample.domain;

import java.util.UUID;

public class BankAccountTestSamples {

    public static BankAccount getBankAccountSample1() {
        return new BankAccount().id("id1").name("name1");
    }

    public static BankAccount getBankAccountSample2() {
        return new BankAccount().id("id2").name("name2");
    }

    public static BankAccount getBankAccountRandomSampleGenerator() {
        return new BankAccount().id(UUID.randomUUID().toString()).name(UUID.randomUUID().toString());
    }
}
