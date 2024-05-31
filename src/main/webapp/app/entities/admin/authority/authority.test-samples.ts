import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '677d6b39-609c-4fc7-a1ae-5c62f9e20386',
};

export const sampleWithPartialData: IAuthority = {
  name: 'eda1d0a6-da77-45f2-8d65-5193d3016157',
};

export const sampleWithFullData: IAuthority = {
  name: '148432d2-5823-411e-9544-d83f5f862994',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
