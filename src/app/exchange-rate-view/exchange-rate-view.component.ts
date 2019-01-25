import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/service/exchangeRate.service';
import { HttpClient } from '@angular/common/http';


import { CurrencyRates } from '../shared/models/currencyRates';
import { Currency } from '../shared/models/currency';


@Component({
  selector: 'app-exchange-rate-view',
  templateUrl: './exchange-rate-view.component.html',
  styleUrls: ['./exchange-rate-view.component.css'],
})
export class ExchangeRateViewComponent implements OnInit {

  currencyRates: CurrencyRates;
  allCurrencies: Currency[] = [];
  random10Currencies: Currency[] = [];

  bsInlineValue = new Date();
  minDate = new Date(1999, 1, 1);
  selectedCurrency = null;
  date: string;
  lastHistoricalRate: number;

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.exchangeRateService.getLatestCurrencyRates().subscribe(data => {
      this.currencyRates = data;
      this.allCurrencies = this.getCurrencies(data);
      this.random10Currencies = this.getRandom10Currencies(this.allCurrencies);
    }, error => {
      console.log('Error while get latest currency rates data !');
    });
  }

  getCurrencies(data: CurrencyRates): Currency[] {
    return Object.keys(data.rates).map(key => {
      return <Currency>{
        name: key,
        value: data.rates[key]
      }
    })
  }

  getRandom10Currencies(allCurrencies: Currency[]): Currency[] {
    const randomCurrencies: Currency[] = [];

    while (randomCurrencies.length < 10) {
      const randomCurrency = allCurrencies[Math.floor(Math.random() * allCurrencies.length)];
      const findCurrency = randomCurrencies.find(item => item.name === randomCurrency.name);
      if (!findCurrency) {
        randomCurrencies.push(randomCurrency);
      }
    }

    return randomCurrencies;
  }

  selectCurrency(event) {
    this.selectedCurrency = event.target.value;
  }

  onClickPickDate(event) {
    this.date = event.toISOString().slice(0, 10);
  }

  onClickGetHistoricalRate() {
    this.exchangeRateService.getHistoricalCurrencyRates(this.date, this.selectedCurrency).subscribe(data => {
      this.lastHistoricalRate = data.rates[this.selectedCurrency];
    }, error => {
      console.log('Error while get historical data !');
    })
  }

}
