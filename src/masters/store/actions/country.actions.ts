import { Action } from "@ngrx/store";
import { Country } from "../../models/country";

export const LOAD_COUNTRY = "[Country] Load Country";
export const LOAD_SINGLE_COUNTRY = "[Country] Load Single Country";
export const LOAD_SINGLE_COUNTRY_FORM = "[Country] Load Single Country Form";
export const CREATE_COUNTRY = "[Country] Create Country";
export const UPDATE_COUNTRY = "[Country] Update Country";
export const GET_COUNTRY = "[Country] Get Country";
export const DELETE_COUNTRY = "[Country] Delete Country";
export const FAIL_COUNTRY = "[Country] Fail Country";

export class LoadCountry implements Action {
  readonly type = LOAD_COUNTRY;  
}

export class LoadSingleCountry implements Action {
  readonly type = LOAD_SINGLE_COUNTRY;  
  constructor(public payload: any) {}
}

export class LoadSingleCountryForm implements Action {
  readonly type = LOAD_SINGLE_COUNTRY_FORM;
  constructor(public payload: Country) {}
}

export class CreateCountry implements Action {
  readonly type = CREATE_COUNTRY;
  constructor(public payload: Country) {}
}
export class FailCountry implements Action {
    readonly type = FAIL_COUNTRY;
    constructor(public payload: any) {}
  }

export class UpdateCountry implements Action {
  readonly type = UPDATE_COUNTRY;
  constructor(public payload: Country) {}
}

export class GetCountry implements Action {
  readonly type = GET_COUNTRY;
  constructor(public payload: Country[]) {}
}

export class DeleteCountry implements Action {
  readonly type = DELETE_COUNTRY;
  constructor(public payload: any) {}
}

export type CountryActions =
  | CreateCountry
  | UpdateCountry
  | GetCountry
  | DeleteCountry
  | FailCountry
  | LoadCountry
  | LoadSingleCountry
  | LoadSingleCountryForm;
