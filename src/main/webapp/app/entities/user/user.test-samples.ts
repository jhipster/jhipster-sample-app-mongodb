import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'e06126ac-f988-47ad-abb8-30ae6161d8a9',
  login: '0D@t',
};

export const sampleWithPartialData: IUser = {
  id: '8131e47e-3e8c-4b64-b6ab-380a20200823',
  login: 'k_TueW',
};

export const sampleWithFullData: IUser = {
  id: 'cb8a1023-0861-447a-9879-61df188efa44',
  login: 'jf=e?g@D',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
