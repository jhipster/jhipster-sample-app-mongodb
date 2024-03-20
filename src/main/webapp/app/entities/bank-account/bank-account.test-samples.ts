import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: '782ea7e3-0be1-4845-9243-8117c5003569',
  name: 'finally fester',
  balance: 13506.38,
};

export const sampleWithPartialData: IBankAccount = {
  id: '9c5cac34-7166-499f-9f2a-20d9a8256f83',
  name: 'towards instead',
  balance: 28296.68,
};

export const sampleWithFullData: IBankAccount = {
  id: '56a1a1e7-809d-4279-aad9-389084f71282',
  name: 'indeed subsidise',
  balance: 2056.35,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'jaggedly unless',
  balance: 10627.09,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
