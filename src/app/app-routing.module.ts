import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ExchangeRateWiewComponent } from './exchange-rate-wiew/exchange-rate-wiew.component';
import { PageNotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/exchangeRateWiew', pathMatch: 'full' },
  { path: 'exchangeRateWiew', component: ExchangeRateWiewComponent },
  { path: 'currencyConverter', component: CurrencyConverterComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
