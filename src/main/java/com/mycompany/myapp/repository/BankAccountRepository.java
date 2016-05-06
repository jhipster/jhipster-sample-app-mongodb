package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.BankAccount;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the BankAccount entity.
 */
@SuppressWarnings("unused")
public interface BankAccountRepository extends MongoRepository<BankAccount,String> {

}
