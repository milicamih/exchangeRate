import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateWiewComponent } from './exchange-rate-wiew.component';

describe('ExchangeRateWiewComponent', () => {
  let component: ExchangeRateWiewComponent;
  let fixture: ComponentFixture<ExchangeRateWiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateWiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateWiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
