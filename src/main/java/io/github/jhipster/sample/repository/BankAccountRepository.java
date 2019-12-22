package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.BankAccount;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the BankAccount entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BankAccountRepository extends MongoRepository<BankAccount, String> {

}
