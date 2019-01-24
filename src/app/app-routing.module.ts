import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ExchangeRateViewComponent } from './exchange-rate-view/exchange-rate-view.component';
import { PageNotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/exchangeRateView', pathMatch: 'full' },
  { path: 'exchangeRateView', component: ExchangeRateViewComponent },
  { path: 'currencyConverter', component: CurrencyConverterComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
