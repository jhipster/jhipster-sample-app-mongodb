import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: '7ce4441b-e7b4-4e98-953f-948dd7254ed4',
  name: 'repeatedly Orchestrator Account',
  balance: 88015,
};

export const sampleWithPartialData: IBankAccount = {
  id: '172559c8-38fb-472e-8cf5-fee35b549b00',
  name: 'Checking Tricycle Streamlined',
  balance: 5203,
};

export const sampleWithFullData: IBankAccount = {
  id: '0b7393a7-f86b-4f42-baa9-ee404abf4bbd',
  name: 'finally Ergonomic',
  balance: 96444,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Chicken Strategist Towels',
  balance: 73746,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
