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

  currencyRates: CurrencyRates[] = [];

  constructor(private http: HttpClient, private exchangerateService : ExchangeRateService) { }

  ngOnInit() {
  }

}
