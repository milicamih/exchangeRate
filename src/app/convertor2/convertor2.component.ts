import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/service/exchangeRate.service';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../shared/models/currencyRates';
import { ErrorResponse } from '../shared/models/errorResponse';
import { ErrorType } from '../shared/models/errorType';

@Component({
  selector: 'app-convertor2',
  templateUrl: './convertor2.component.html',
  styleUrls: ['./convertor2.component.css']
})
export class Convertor2Component implements OnInit {

  
  bsInlineValue = new Date();
  minDate = new Date(1999, 1, 1);
  date: string;
  currencyRates: CurrencyRates;
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
  typedAmount: Number;
  result: number;
  errorMessage: ErrorResponse;

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService) { }

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
  onClickPickDate(event){
    this.date = event.toISOString().slice(0, 10);
  }

  convert(amount: number) {
    this.exchangeRateService.getConverter(this.selectedCurrencyFrom, this.selectedCurrencyTo, amount, this.date).subscribe(data => {
      if(data["success"]==="true"){
        this.result = data;
      }
      else if(data["success"]==="false"){
        this.errorMessage = data;
      }
    }, error => {
      console.log('Error while get historical data !');
    
    })
  }

  
}
