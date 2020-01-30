import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapaHijoComponent } from './capa-hijo/capa-hijo.component';
import { CapaHijoAnyadirComponent } from './capa-hijo-anyadir/capa-hijo-anyadir.component';

@NgModule({
  declarations: [
    AppComponent,
    CapaHijoComponent,
    CapaHijoAnyadirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
