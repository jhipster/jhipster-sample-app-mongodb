import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bank-account',
    data: { pageTitle: 'jhipsterMongodbSampleApplicationApp.bankAccount.home.title' },
    loadChildren: () => import('./bank-account/bank-account.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
