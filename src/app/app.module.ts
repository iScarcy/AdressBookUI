import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdreessbookItemComponent } from './components/adressbook/adreessbook-item/adreessbook-item.component';
import { AdressbookComponent } from './components/adressbook/adressbook.component';
import { MaterialModule } from './shared/material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AdressbookEffects } from './shared/store/adressbook.effects';
import { adressbookReducer } from './shared/store/adressbook.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdreessbookItemComponent,
    AdressbookComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,   
    StoreModule.forRoot({addressbook:adressbookReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(AdressbookEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
