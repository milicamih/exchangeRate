export class CurrencyHistoricalRate {
  date: string;
  currency: string;
  value: number;

  constructor(date: string, currency: string, value: number){
    this.date = date;
    this.currency = currency;
    this.value = value;
  }   
}