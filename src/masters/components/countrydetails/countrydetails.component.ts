import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import * as fromStore from '../../store';
import { Country } from '../../models/country';


@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryarr$ : Observable<any>;
  country$ : Observable<any>;
  editmode: boolean = false;
  editid: string;

  constructor(private store$: Store<fromStore.CountryState>) { }

  ngOnInit() {
    this.countryarr$ = this.store$.select(fromStore.getCountryStateDataSelector);
    this.store$.dispatch(new fromStore.LoadCountry());

    this.country$ = this.store$.select(fromStore.getCountryStateSingleCountrySelector);
  }
  new(){
    this.editmode = false;
    this.editid = '';
    this.store$.dispatch(new fromStore.LoadSingleCountry(this.editid));
  }
  onSave(event: Country){
    console.log(event);
    if(this.editmode){
      let saveValue = this.prepareCountry(event);
      this.store$.dispatch(new fromStore.UpdateCountry(saveValue));
    }else{
      this.store$.dispatch(new fromStore.CreateCountry(event));
    }
    this.editmode = false;
  }

  prepareCountry(value){
    let countrysave: Country;
    countrysave={
      id:this.editid,
      aliasname:value.aliasname,
      name:value.name
    }
    return countrysave;
  }

  OnEdit(event){
    this.store$.dispatch(new fromStore.LoadSingleCountry(event));
    this.editid = event;
    this.editmode = true;
  }
}
