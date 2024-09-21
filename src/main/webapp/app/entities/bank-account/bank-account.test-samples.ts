import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 'e41ebe85-f4d7-45e4-8ea6-e125c3f7ec5e',
  name: 'wherever wildly valuable',
  balance: 23369.89,
};

export const sampleWithPartialData: IBankAccount = {
  id: 'de3f3b3b-b6c3-4e7a-b3e9-929b23d1ab1c',
  name: 'offensively',
  balance: 29697.2,
};

export const sampleWithFullData: IBankAccount = {
  id: 'efe5d9f1-444c-41fc-8734-58726bf14419',
  name: 'on',
  balance: 7377.15,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'expensive drat immediate',
  balance: 23818.81,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
