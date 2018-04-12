import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsContainer } from './countrydetails.component';

describe('CountryDetailsContainer', () => {
  let component: CountryDetailsContainer;
  let fixture: ComponentFixture<CountryDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
