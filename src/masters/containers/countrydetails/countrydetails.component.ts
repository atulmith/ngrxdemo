import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import * as fromStore from '../../store';
import { Country } from '../../models/country';


@Component({
  selector: 'app-countrydetails-cont',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountryDetailsContainer implements OnInit {
  

  constructor(private store$: Store<fromStore.CountryState>) { }

  ngOnInit() {
  
  }
  
  
}
