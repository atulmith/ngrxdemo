import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import * as fromActions from "../actions/country.actions";

import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from 'rxjs/operators';

import { CountryMasterService } from "../../services/countrymaster.service";
import { Country } from "../../models/country";

@Injectable()
export class CountryMasterEffects {
  
    constructor(
      private action$: Actions,
      private countryService: CountryMasterService
    ) {}

  @Effect()
  createCountry$ = this.action$.ofType(fromActions.CREATE_COUNTRY).pipe(
    map((action: fromActions.CreateCountry) => action.payload ),
    switchMap(country => {

      return this.countryService.createCountry(country).pipe(
        map(country => new fromActions.GetCountry(country) ),
        catchError(error => of(new fromActions.FailCountry(error)))
      )

    })

    );

  @Effect()
  getCountry$ = this.action$.ofType(fromActions.LOAD_COUNTRY).pipe(
    map((action: fromActions.GetCountry) => action.payload ),
    switchMap(country => {

      return this.countryService.getCountry().pipe(
        map(country => new fromActions.GetCountry(country) ),
        catchError(error => of(new fromActions.FailCountry(error)))
      )

    })

    );

    @Effect()
    getSingleCountry$ = this.action$.ofType(fromActions.LOAD_SINGLE_COUNTRY).pipe(
    map((action: fromActions.GetCountry) => action.payload ),
    switchMap(id => {

      return this.countryService.getCountryEdit(id).pipe(
        map(country => new fromActions.LoadSingleCountryForm(country) ),
        catchError(error => of(new fromActions.FailCountry(error)))
      )

    })

    );

    @Effect()
    updateCountry$ = this.action$.ofType(fromActions.UPDATE_COUNTRY).pipe(
    map((action: fromActions.UpdateCountry) => action.payload ),
    switchMap((country: Country) => {

      return this.countryService.editSaveCountry(country,country.id).pipe(
        map(country => new fromActions.GetCountry(country) ),
        catchError(error => of(new fromActions.FailCountry(error)))
      )

    })

    );

}
