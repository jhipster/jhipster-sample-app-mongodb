import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b668892f-45f2-4362-ba58-7f22231484b1',
};

export const sampleWithPartialData: IAuthority = {
  name: '59ad4ede-93fc-4e90-93fa-5c6e2b340e2b',
};

export const sampleWithFullData: IAuthority = {
  name: 'd283222a-d5d7-4765-b2c5-55e10310a763',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
