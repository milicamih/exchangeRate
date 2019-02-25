import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/services/exchangeRatesService/exchangeRate.service';
import { SpinnerService } from '../shared/services/spinnerService/spinner.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { CurrencyRates } from '../shared/models/currencyRates';
import { Currency } from '../shared/models/currency';
import { CurrencyFullNames } from '../shared/models/currencyFullNames';


@Component({
  selector: 'app-exchange-rate-view',
  templateUrl: './exchange-rate-view.component.html',
  styleUrls: ['./exchange-rate-view.component.css'],
})
export class ExchangeRateViewComponent implements OnInit {

  allCurrencies: Currency[] = [];
  random10Currencies: Currency[] = [];

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.start();
    forkJoin([
      this.exchangeRateService.getLatestCurrencyRates(),
      this.exchangeRateService.getCurrencySymbolsNames()
    ]).subscribe(([currencyRates, currencyNames]) => {
      this.allCurrencies = this.getCurrencies(currencyRates);
      this.addDescriptionToCurrencySymbol(currencyNames);
      this.random10Currencies = this.getRandom10Currencies(this.allCurrencies);
      this.spinnerService.stop();
    }, (error) => {
      this.spinnerService.stop();
      console.log(error);
    });
  }

  getCurrencies(currencyRates: CurrencyRates): Currency[] {
    return Object.keys(currencyRates.rates).map(key => {
      return <Currency>{
        nameShort: key,
        value: currencyRates.rates[key]
      }
    })
  }

  addDescriptionToCurrencySymbol(currencySymbolsData: CurrencyFullNames) {
      this.allCurrencies.forEach(item => {
        if (currencySymbolsData.symbols[item.nameShort]) {
          item.nameLong = currencySymbolsData.symbols[item.nameShort]
        }
      })
  }

  getRandom10Currencies(allCurrencies: Currency[]): Currency[] {
    const randomCurrencies: Currency[] = [];

    while (randomCurrencies.length < 10) {
      const randomCurrency = allCurrencies[Math.floor(Math.random() * allCurrencies.length)];
      const findCurrency = randomCurrencies.find(item => item.nameShort === randomCurrency.nameShort);
      if (!findCurrency) {
        randomCurrencies.push(randomCurrency);
      }
    }
    return randomCurrencies;
  }

}