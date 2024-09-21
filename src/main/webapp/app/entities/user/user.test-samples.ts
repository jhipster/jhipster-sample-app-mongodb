import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'e62af87d-b3a6-46da-8b91-c114eec66b8a',
  login: 'o2Q{@YFgl',
};

export const sampleWithPartialData: IUser = {
  id: '64a76d18-f46e-4111-973d-c6b3c9ddae68',
  login: 'Zaq',
};

export const sampleWithFullData: IUser = {
  id: 'dbe0454e-fc28-471e-a3e7-741dccbd7dbf',
  login: 'dxvn6_@t\\eo\\XyzmT\\mpoGF34\\(4qc',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
