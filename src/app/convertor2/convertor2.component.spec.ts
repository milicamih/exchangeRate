import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Convertor2Component } from './convertor2.component';

describe('Convertor2Component', () => {
  let component: Convertor2Component;
  let fixture: ComponentFixture<Convertor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Convertor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Convertor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
