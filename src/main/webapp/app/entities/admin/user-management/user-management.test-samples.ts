import dayjs from 'dayjs/esm';

import { IUserManagement, NewUserManagement } from './user-management.model';

export const sampleWithRequiredData: IUserManagement = {
  login: 'Randall.Sauer',
  email: 'Lucienne5@hotmail.com',
};

export const sampleWithPartialData: IUserManagement = {
  id: 'graceful pave',
  login: 'Ariane.Kreiger40',
  firstName: 'Marlin',
  lastName: 'Corkery',
  email: 'Antonietta_Gerlach@hotmail.com',
  activated: false,
  langKey: 'en',
  lastModifiedBy: 'ice-cream defrag',
  lastModifiedDate: dayjs('2019-12-21T19:53'),
};

export const sampleWithFullData: IUserManagement = {
  id: 'atop bar fully',
  login: 'Merlin.Rice',
  firstName: 'Dortha',
  lastName: 'Carter',
  email: 'Joann_Howe33@yahoo.com',
  activated: false,
  langKey: 'en',
  imageUrl: 'and joyfully frightfully',
  createdBy: 'sympathetically',
  createdDate: dayjs('2019-12-22T04:09'),
  lastModifiedBy: 'sympathetically inspect ah',
  lastModifiedDate: dayjs('2019-12-22T00:21'),
};

export const sampleWithNewData: NewUserManagement = {
  email: 'Jasen82@yahoo.com',
  login: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
