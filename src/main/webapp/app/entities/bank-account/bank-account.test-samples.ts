import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: '118d0d68-5d83-4ab2-9eb4-5f9a318c1c35',
  name: 'eyeballs Home technologies',
  balance: 57881,
};

export const sampleWithPartialData: IBankAccount = {
  id: '1d455a2d-5096-4d83-a9f7-a5307c91bd87',
  name: 'calculating Books',
  balance: 19033,
};

export const sampleWithFullData: IBankAccount = {
  id: '3dacb93d-7db4-4227-b9fb-aa533ff2a652',
  name: 'Sleek transmitter out-of-the-box',
  balance: 34947,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Circle Analyst',
  balance: 60231,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
