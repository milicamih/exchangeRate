import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateOnDateComponent } from './currency-rate-on-date.component';

describe('CurrencyRateOnDateComponent', () => {
  let component: CurrencyRateOnDateComponent;
  let fixture: ComponentFixture<CurrencyRateOnDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyRateOnDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateOnDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
