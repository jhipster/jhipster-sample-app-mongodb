import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '676369f7-a56f-4e08-98d1-06a7fd513311',
};

export const sampleWithPartialData: IAuthority = {
  name: '183d521e-4d35-4829-9668-3049928c3719',
};

export const sampleWithFullData: IAuthority = {
  name: '16fee960-a3b9-4a49-8f28-a06c3433d0e4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
