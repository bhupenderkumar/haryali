import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { HaryaliSharedModule } from 'app/shared';
import {
  ProductCategoryComponent,
  ProductCategoryDetailComponent,
  ProductCategoryUpdateComponent,
  ProductCategoryDeletePopupComponent,
  ProductCategoryDeleteDialogComponent,
  productCategoryRoute,
  productCategoryPopupRoute
} from './';

const ENTITY_STATES = [...productCategoryRoute, ...productCategoryPopupRoute];

@NgModule({
  imports: [HaryaliSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductCategoryComponent,
    ProductCategoryDetailComponent,
    ProductCategoryUpdateComponent,
    ProductCategoryDeleteDialogComponent,
    ProductCategoryDeletePopupComponent
  ],
  entryComponents: [
    ProductCategoryComponent,
    ProductCategoryUpdateComponent,
    ProductCategoryDeleteDialogComponent,
    ProductCategoryDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HaryaliProductCategoryModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}