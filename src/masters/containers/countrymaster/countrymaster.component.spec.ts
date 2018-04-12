import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrymasterContainer } from './countrymaster.component';

describe('CountrymasterContainer', () => {
  let component: CountrymasterContainer;
  let fixture: ComponentFixture<CountrymasterContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrymasterContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrymasterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
