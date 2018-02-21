import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { reducers  } from './ngrx/index';

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
    StoreModule.forRoot({ reducers }, {}),
    EffectsModule.forRoot([CartEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
