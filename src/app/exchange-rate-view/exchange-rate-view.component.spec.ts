import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateViewComponent } from './exchange-rate-view.component';

describe('ExchangeRateViewComponent', () => {
  let component: ExchangeRateViewComponent;
  let fixture: ComponentFixture<ExchangeRateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
