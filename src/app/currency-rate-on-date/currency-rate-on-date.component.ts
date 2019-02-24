import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/service/exchangeRate.service';
import { HttpClient } from '@angular/common/http';


import { CurrencyRates } from '../shared/models/currencyRates';
import { Currency } from '../shared/models/currency';

@Component({
  selector: 'app-currency-rate-on-date',
  templateUrl: './currency-rate-on-date.component.html',
  styleUrls: ['./currency-rate-on-date.component.css']
})
export class CurrencyRateOnDateComponent implements OnInit {

  currencyRates: CurrencyRates;
  allCurrencies: Currency[] = [];
  random10Currencies: Currency[] = [];
  currencySymbolsData: any[];

  bsInlineValue = new Date();
  minDate = new Date(1999, 1, 1);
  selectedCurrency = null;
  date: string;
  lastHistoricalRate: any;

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService) {
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.exchangeRateService.getLatestCurrencyRates().subscribe(data => {

     
      this.currencyRates = data;
      this.allCurrencies = this.getCurrencies(data);
    
      console.log(this.allCurrencies);

    }, error => {
      console.log('Error while get latest currency rates data !');
    });
  }

   getCurrencies(data: CurrencyRates): Currency[] {
    return Object.keys(data.rates).map(key => {
      return <Currency>{
        nameShort: key,
        value: data.rates[key]
      }
     })
   }

   selectCurrency(event) {
    this.selectedCurrency = event.target.value;
  }

  onClickPickDate(event) {
    this.date = event.toISOString().slice(0, 10);
  }

  onClickGetHistoricalRate() {
    this.exchangeRateService.getHistoricalCurrencyRates(this.date, this.selectedCurrency).subscribe(data => {
      this.lastHistoricalRate = ` On ${this.date}   1EUR = ${data.rates[this.selectedCurrency]} ${this.selectedCurrency}`;
    }, error => {
      console.log('Error while get historical data !');
    })
  }

}
