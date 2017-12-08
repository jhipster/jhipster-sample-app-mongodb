package io.github.jhipster.sample.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

/**
 * A BankAccount.
 */
@Document(collection = "bank_account")
public class BankAccount implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("name")
    private String name;

    @NotNull
    @Field("balance")
    private BigDecimal balance;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BankAccount bankAccount = (BankAccount) o;
        if (bankAccount.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), bankAccount.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "BankAccount{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", balance=" + getBalance() +
            "}";
    }
}
