import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//THIRD PARTY----------------------------------------------
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// COMPONETS ----------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ExchangeRateWiewComponent } from './exchange-rate-wiew/exchange-rate-wiew.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    ExchangeRateWiewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
