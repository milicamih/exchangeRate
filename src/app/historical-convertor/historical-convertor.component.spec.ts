import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalConvertorComponent } from './historical-convertor.component';

describe('HistoricalConvertorComponent', () => {
  let component: HistoricalConvertorComponent;
  let fixture: ComponentFixture<HistoricalConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
