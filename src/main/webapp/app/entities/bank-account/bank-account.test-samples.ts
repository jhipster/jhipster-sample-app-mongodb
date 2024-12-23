import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: '86bd2705-f542-4e23-9f14-7bd5953bd767',
  name: 'rebound',
  balance: 39.29,
};

export const sampleWithPartialData: IBankAccount = {
  id: '9854f6da-1ef0-4709-8c34-4ffb472a7548',
  name: 'happy gadzooks yum',
  balance: 30069.46,
};

export const sampleWithFullData: IBankAccount = {
  id: '60cc4f9b-5ca6-4080-a730-d626c31ee976',
  name: 'twine',
  balance: 25257.7,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'clonk porter',
  balance: 26302.97,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
