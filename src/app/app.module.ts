import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//THIRD PARTY----------------------------------------------
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// COMPONENTS ----------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ExchangeRateViewComponent } from './exchange-rate-view/exchange-rate-view.component';
import { PageNotFoundComponent } from './not-found.component';
import { CurrencyRateOnDateComponent } from './currency-rate-on-date/currency-rate-on-date.component';
import { HistoricalConvertorComponent } from './historical-convertor/historical-convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    ExchangeRateViewComponent,
    PageNotFoundComponent,
    CurrencyRateOnDateComponent,
    HistoricalConvertorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
