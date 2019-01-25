import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/service/exchangeRate.service';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../shared/models/currencyRates';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  currencyRates: CurrencyRates;
  selectedCurrencyFrom: Number;
  selectedCurrencyTo: Number;
  result: Number;

  constructor(private http: HttpClient, private exchangeRateService : ExchangeRateService) { }

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

  selectFirstCurrency(event) {
    this.selectedCurrencyFrom = event.target.value;  
  }

  selectSecondCurrency(event) {
    this.selectedCurrencyTo = event.target.value;  
  }

  convert(titleInput: Number){
    let amountToConvert = Number(titleInput) * Number(this.selectedCurrencyTo);
    this.result = amountToConvert / Number (this.selectedCurrencyFrom);
  }

}
