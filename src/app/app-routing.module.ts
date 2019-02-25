import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ExchangeRateViewComponent } from './exchange-rate-view/exchange-rate-view.component';
import { PageNotFoundComponent } from './not-found.component';
import { HistoricalConvertorComponent } from './historical-convertor/historical-convertor.component';
import { CurrencyRateOnDateComponent } from './currency-rate-on-date/currency-rate-on-date.component';


const routes: Routes = [
  { path: '', redirectTo: '/exchangeRateView', pathMatch: 'full' },
  { path: 'exchangeRateView', component: ExchangeRateViewComponent },
  { path: 'currencyRateOnDate', component: CurrencyRateOnDateComponent },
  { path: 'currencyConverter', component: CurrencyConverterComponent },
  { path: 'historicalConvertor', component: HistoricalConvertorComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
