// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// app
import { CART_PROVIDERS } from '../services/index';

@NgModule({
  imports: [
  ],
  providers: [
    ...CART_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
  ]
})
export class CartModule {

  constructor(@Optional() @SkipSelf() parentModule: CartModule) {
    if (parentModule) {
      throw new Error('CartModule already loaded; Import in root module only.');
    }
  }
}
