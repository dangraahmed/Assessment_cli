import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppReducer } from './ngrx/index';

import { AppComponent } from './app.component';
import { CartModule, CartEffects } from './index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(CartEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
