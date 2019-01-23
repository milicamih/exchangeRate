import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyRates } from '../models/currencyRates';

@Injectable({
  providedIn: 'root'
})

export class ExchangerateService {

  private serverAddress = 'http://data.fixer.io/api/';
  private accessKey = '86b418f0e129899d8fadd57480356e95';

  constructor(private http: HttpClient) { }

  getLatestCurrencyRates(): Observable<CurrencyRates> {
     return this.http.get<CurrencyRates>(`${this.serverAddress}latest?access_key=${this.accessKey}`);
  }

   
}

