import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../shared/services/exchangeRatesService/exchangeRate.service';
import { SpinnerService } from '../shared/services/spinnerService/spinner.service';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../shared/models/currencyRates';
import { ErrorResponse } from '../shared/models/errorResponse';

@Component({
  selector: 'app-historical-convertor.component',
  templateUrl: './historical-convertor.component.html',
  styleUrls: ['./historical-convertor.component.css']
})
export class HistoricalConvertorComponent implements OnInit {

  
  bsInlineValue = new Date();
  minDate = new Date(1999, 1, 1);
  date: string;
  currencyRates: CurrencyRates;
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
  typedAmount: Number;
  result: number;
  errorMessage: ErrorResponse;

  constructor(private http: HttpClient, private exchangeRateService: ExchangeRateService, private spinnerService: SpinnerService) { }

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
    this.spinnerService.start();
    this.exchangeRateService.getConverter(this.selectedCurrencyFrom, this.selectedCurrencyTo, amount, this.date).subscribe(data => {
     if(data.success === true) {
       this.typedAmount = data;
     }
     this.errorMessage = data;
     this.spinnerService.stop();
    }, error => {
      this.spinnerService.stop();
      console.log('Error while get historical data !'); 
    })
  } 
}
