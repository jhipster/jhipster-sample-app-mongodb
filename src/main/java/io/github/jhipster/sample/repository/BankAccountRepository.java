package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.BankAccount;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the BankAccount entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BankAccountRepository extends MongoRepository<BankAccount,String> {
    
}
