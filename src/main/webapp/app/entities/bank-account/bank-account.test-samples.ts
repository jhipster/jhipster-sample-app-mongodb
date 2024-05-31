import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: '7ce4441b-e7b4-4e98-9953-f948dd7254ed',
  name: 'tandem molding late',
  balance: 4833.89,
};

export const sampleWithPartialData: IBankAccount = {
  id: 'e0cf5fee-35b5-449b-a00d-611cf5d00b73',
  name: 'wet',
  balance: 9345.38,
};

export const sampleWithFullData: IBankAccount = {
  id: '2baa9ee4-04ab-4f4b-abd5-e331ff3bbf39',
  name: 'eager than than',
  balance: 14971.95,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'champion',
  balance: 7304.66,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
