import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterMongodbSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterMongodbSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterMongodbSampleApplicationHomeModule } from './home/home.module';
import { JhipsterMongodbSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterMongodbSampleApplicationAccountModule } from './account/account.module';
import { JhipsterMongodbSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterMongodbSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterMongodbSampleApplicationSharedModule,
        JhipsterMongodbSampleApplicationHomeModule,
        JhipsterMongodbSampleApplicationAdminModule,
        JhipsterMongodbSampleApplicationAccountModule,
        JhipsterMongodbSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterMongodbSampleApplicationAppModule {}
