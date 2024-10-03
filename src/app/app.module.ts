import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdreessbookItemComponent } from './components/adressbook/adreessbook-item/adreessbook-item.component';
import { AdressbookComponent } from './components/adressbook/adressbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AdreessbookItemComponent,
    AdressbookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
