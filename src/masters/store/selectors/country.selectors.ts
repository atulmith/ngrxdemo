import *  as fromFeature from "../reducers";
import * as fromReducer from "../reducers/country.reducers";

import { createSelector } from '@ngrx/store';

export const getCountryStateSelector = createSelector(
    fromFeature.getCountryState,
    (state: fromFeature.CountryState) => state.countrymaster
)

export const getCountryStateEntitiesSelector = createSelector(
    getCountryStateSelector,
    fromReducer.getCountryMasterEntities
)

export const getCountryStateDataSelector = createSelector(
    getCountryStateEntitiesSelector, 
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
      }
)

export const getCountryStateLoadedSelector = createSelector(
    getCountryStateSelector,
    fromReducer.getCountryMasterLoaded
)

export const getCountryStateLoadingSelector = createSelector(
    getCountryStateSelector,
    fromReducer.getCountryMasterLoading
)

export const getCountryStateSingleCountrySelector = createSelector(
    getCountryStateSelector,
    fromReducer.getCountryMasterSingleCountry
)

