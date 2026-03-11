import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'jhipsterMongodbSampleApplicationApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'bank-account',
    data: { pageTitle: 'jhipsterMongodbSampleApplicationApp.bankAccount.home.title' },
    loadChildren: () => import('./bank-account/bank-account.routes'),
  },
  {
    path: 'user-management',
    data: { pageTitle: 'userManagement.home.title' },
    loadChildren: () => import('./admin/user-management/user-management.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
