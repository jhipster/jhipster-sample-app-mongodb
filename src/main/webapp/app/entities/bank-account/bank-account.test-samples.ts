import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: '7ce4441b-e7b4-4e98-9953-f948dd7254ed',
  name: 'repeatedly Orchestrator Euro',
  balance: 29070,
};

export const sampleWithPartialData: IBankAccount = {
  id: 'e172559c-838f-4b72-8e0c-f5fee35b549b',
  name: 'Hyundai',
  balance: 2930,
};

export const sampleWithFullData: IBankAccount = {
  id: '1cf5d00b-7393-4a7f-a86b-f42baa9ee404',
  name: 'desk male Electric',
  balance: 29815,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Steel',
  balance: 31602,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
