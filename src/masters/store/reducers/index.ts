import * as fromReducer from "./country.reducers";
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface CountryState{
    countrymaster: fromReducer.CountryState
}

export const reducers: ActionReducerMap<CountryState> ={
    countrymaster: fromReducer.reducer
}

export const getCountryState = createFeatureSelector<CountryState>(
    'masters'
);