import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdressbookComponent } from './components/adressbook/adressbook.component';
import { MaterialModule } from './shared/material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AdressbookEffects } from './shared/store/adressbook.effects';
import { adressbookReducer } from './shared/store/adressbook.reducer';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppEffects } from './shared/store/Common/app.effects';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,   
    AdressbookComponent, LoadingComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,   
    StoreModule.forRoot({addressbook:adressbookReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AdressbookEffects, AppEffects]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
