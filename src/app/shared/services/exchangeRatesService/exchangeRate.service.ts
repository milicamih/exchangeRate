import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { CurrencyRates } from '../../models/currencyRates';
import { CurrencyFullNames } from '../../models/currencyFullNames';
import { ErrorResponse } from '../../models/errorResponse';
import { ErrorType } from '../../models/errorType';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ExchangeRateService {

  private serverAddress = 'http://data.fixer.io/api/';
  private accessKey = '86b418f0e129899d8fadd57480356e95';

  constructor(private http: HttpClient) { }

  getLatestCurrencyRates(): Observable<CurrencyRates> {
    return this.http.get<CurrencyRates>(`${this.serverAddress}latest?access_key=${this.accessKey}`)

  }

  getHistoricalCurrencyRates(date: string, currencyName: string): Observable<CurrencyRates> {
    return this.http.get<CurrencyRates>(`${this.serverAddress}${date}?access_key=${this.accessKey}&symbols=${currencyName}`);
  }

  getCurrencySymbolsNames(): Observable<CurrencyFullNames> {
    return this.http.get<CurrencyFullNames>(`${this.serverAddress}symbols?access_key=${this.accessKey}`);
  }

  getConverter(selectedCurrencyFrom: any, to: any, amount: number, date: any): Observable<any> {
    return this.http.get<any>(`${this.serverAddress}convert?access_key=${this.accessKey}&from=${selectedCurrencyFrom}&to=${to}&amount=${amount}&date=${date}`)
      .pipe(
        map(res => {
          if (res['success'] === true) {
            return res;
          } else {
            return <ErrorResponse>{
              success: false, 
              error: <ErrorType> {
                code: res.error.code,
                info: res.error.info,
                type: res.error.type, 
              }
            }
          }
        }),
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: ErrorResponse) {
    return observableThrowError(error || "Server Error");
  }



}



