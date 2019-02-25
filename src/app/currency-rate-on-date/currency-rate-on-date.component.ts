import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/services/exchangeRatesService/exchangeRate.service';
import { SpinnerService } from '../shared/services/spinnerService/spinner.service';
import { HttpClient } from '@angular/common/http';

import { CurrencyRates } from '../shared/models/currencyRates';
import { CurrencyHistoricalRate } from './currencyHistoricalRate'


@Component({
  selector: 'app-currency-rate-on-date',
  templateUrl: './currency-rate-on-date.component.html',
  styleUrls: ['./currency-rate-on-date.component.css']
})
export class CurrencyRateOnDateComponent implements OnInit {

  currencyRates: CurrencyRates;
  bsInlineValue = new Date();
  minDate = new Date(1999, 1, 1);
  selectedCurrency = null;
  date: string;
  lastHistoricalRate: any;
  historicalValueOfCurrency: CurrencyHistoricalRate;

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService, private spinnerService: SpinnerService) {
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.exchangeRateService.getLatestCurrencyRates().subscribe(data => {
      this.currencyRates = data;
    }, error => {
      console.log('Error while get latest currency rates data !');
    });
  }

  selectCurrency(event) {
    this.selectedCurrency = event.target.value;
  }

  onClickPickDate(event) {
    this.date = event.toISOString().slice(0, 10);
  }

  onClickGetHistoricalRate() {
    this.spinnerService.start();
    this.exchangeRateService.getHistoricalCurrencyRates(this.date, this.selectedCurrency).subscribe(data => {
      this.lastHistoricalRate = data.rates[this.selectedCurrency];
      this.historicalValueOfCurrency = new CurrencyHistoricalRate(this.date, this.selectedCurrency, this.lastHistoricalRate);
      this.spinnerService.stop()
    }, error => {
      this.spinnerService.stop()
      console.log('Error while get historical data !');
    })
  }

}
