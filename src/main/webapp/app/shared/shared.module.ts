import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterMongodbSampleApplicationSharedLibsModule,
  JhipsterMongodbSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterMongodbSampleApplicationSharedLibsModule, JhipsterMongodbSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterMongodbSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMongodbSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterMongodbSampleApplicationSharedModule
    };
  }
}
