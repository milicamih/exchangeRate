import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/service/exchangeRate.service';
import { SpinerService } from '../shared/spinerService/spiner.service';
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

  currencyRates: CurrencyRates;
  allCurrencies: Currency[] = [];
  random10Currencies: Currency[] = [];
  currencySymbolsData: CurrencyFullNames;
  loading: boolean = false;

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService, private spinerService: SpinerService) {
  }

  ngOnInit() {
    forkJoin([
      this.exchangeRateService.getLatestCurrencyRates(),
      this.exchangeRateService.getCurrencySymbolsNames()
    ]).subscribe(([allData, currencyNames]) => {
      this.spinerService.startLoading();
      this.currencyRates = allData;
      this.allCurrencies = this.getCurrencies();
      this.currencySymbolsData = currencyNames;
      this.addDescriptionToCurrencySymbol();
      this.random10Currencies = this.getRandom10Currencies(this.allCurrencies);
      this.spinerService.stopLoading();
    }, (error) => {
      console.log(error);
    });
  }

  getCurrencies(): Currency[] {
    return Object.keys(this.currencyRates.rates).map(key => {
      return <Currency>{
        nameShort: key,
        value: this.currencyRates.rates[key]
      }
    })
  }

  addDescriptionToCurrencySymbol() {
      this.allCurrencies.forEach(item => {
        if (this.currencySymbolsData.symbols[item.nameShort]) {
          item.nameLong = this.currencySymbolsData.symbols[item.nameShort]
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