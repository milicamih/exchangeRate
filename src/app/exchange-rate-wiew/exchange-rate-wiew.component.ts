import { Component, OnInit } from '@angular/core';
import { ExchangerateService } from '../shared/service/exchangeRate.service';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../shared/models/currencyRates';
import { Currency } from '../shared/models/currency';

@Component({
  selector: 'app-exchange-rate-wiew',
  templateUrl: './exchange-rate-wiew.component.html',
  styleUrls: ['./exchange-rate-wiew.component.css']
})
export class ExchangeRateWiewComponent implements OnInit {

  currencyRates: CurrencyRates;
  allCurrencies: Currency[] = [];
  random10Currencies: Currency[] = [];

  constructor(private http: HttpClient, private exchangerateService: ExchangerateService) { }


  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.exchangerateService.getLatestCurrencyRates().subscribe(data => {
      this.currencyRates = data;
      this.allCurrencies = this.getCurrencies(data);
      this.random10Currencies = this.getRandom10Currencies(this.allCurrencies);
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
    for (let i = 0; this.random10Currencies.length <10; i++) {
      var randomCurency = allCurrencies[Math.floor(Math.random() * allCurrencies.length)];
      if (this.random10Currencies[i] !== randomCurency) {
        this.random10Currencies.push(randomCurency);
      }
    }
    return this.random10Currencies;
  }

}
