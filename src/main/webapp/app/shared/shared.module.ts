import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HaryaliSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HaryaliSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HaryaliSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HaryaliSharedModule {
  static forRoot() {
    return {
      ngModule: HaryaliSharedModule
    };
  }
}
