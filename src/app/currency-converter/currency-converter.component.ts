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

  selectCurencyToChange: Number;
  selectCurencyToChangeIn: Number;
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

  selectFirstCurency(event) {
    this.selectCurencyToChange = event.target.value;
    
  }

  selectSecondCurency(event) {
    this.selectCurencyToChangeIn = event.target.value;
    
  }

  convert(titleInput: Number){
    let curencyAmountS = Number(titleInput) * Number(this.selectCurencyToChange);
    this.result = curencyAmountS / Number(this.selectCurencyToChangeIn);
  }

}
