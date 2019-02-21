import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/service/exchangeRate.service';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../shared/models/currencyRates';

@Component({
  selector: 'app-convertor2',
  templateUrl: './convertor2.component.html',
  styleUrls: ['./convertor2.component.css']
})
export class Convertor2Component implements OnInit {

  currencyRates: CurrencyRates;
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
  typedAmount: Number;
  la: any

  constructor(private http: HttpClient, private exchangeRateService : ExchangeRateService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.exchangeRateService.getLatestCurrencyRates().subscribe(data => {;
        this.currencyRates = data;
    }, error => {
      console.log('Error while get latest currency rates data !');
    });
  }

  selectFirstCurrency(event){
    this.selectedCurrencyFrom = event.target.value;  
  }

  selectSecondCurrency(event) {
    this.selectedCurrencyTo = event.target.value;  
  }

  convert(amountt: number){
    this.exchangeRateService.getConverter(this.selectedCurrencyFrom, this.selectedCurrencyTo, amountt).subscribe(data => {
    this.la = data; 
    console.log(this.la);
    }, error => {
     console.log('Error while get historical data !');
   })
 }

}
