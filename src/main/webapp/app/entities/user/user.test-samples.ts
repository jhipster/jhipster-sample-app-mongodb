import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'd9f3d6e9-d21e-4543-96cc-c42a15ef1fd6',
  login: '?{&I@0\\pDgnRq-\\&2',
};

export const sampleWithPartialData: IUser = {
  id: '3c03bf49-a7df-4919-aa17-d35a63668961',
  login: 'X',
};

export const sampleWithFullData: IUser = {
  id: '0bc626d8-1cde-43d0-812d-2c678de548f7',
  login: 'a1ML',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
