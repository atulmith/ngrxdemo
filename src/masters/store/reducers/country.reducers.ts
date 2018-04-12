import * as fromActions from "../actions/country.actions";
import { Country } from "../../models/country";

export interface CountryState {
    entities: { [id: number]: Country };
    
    loading: boolean;
    loaded: boolean;
    data: Country;
}

export const initialState: CountryState = {
    // data: [{
    //     name:'India',
    //     aliasname: 'India'
    // },
    // {
    //     name:'USA',
    //     aliasname: 'USA'
    // }],
    entities: {},
    loading: false,
    loaded: false,
    data: {
        id:'0',
        name:'',
        aliasname: ''
    }
}

export function reducer(
    state = initialState,
    actions: fromActions.CountryActions
): CountryState{
    switch(actions.type){
        case fromActions.CREATE_COUNTRY:        
        case fromActions.UPDATE_COUNTRY:{
            const country =actions.payload;
            const entities= {
                ...state.entities,
                [country.id] : country
              };
            return {
                ...state,
                entities
            } 
        }
        case fromActions.GET_COUNTRY:{
            const country = actions.payload;
            // alert('get county');
            console.log(country);
            const entities = country.reduce(
                (entities: { [id: number]: Country }, country: Country) => {
                  return {
                    ...entities,
                    [country.id]: country,
                  };
                },
                {
                  ...state.entities,
                }
              );
              console.log(entities);
        
              return {
                ...state,
                loading: false,
                loaded: true,
                entities,
              };

        }
        case fromActions.LOAD_COUNTRY:{
            return {
                ...state,            
            }
        }
        case fromActions.LOAD_SINGLE_COUNTRY:{
            return {
                ...state,            
            }
        }
        case fromActions.LOAD_SINGLE_COUNTRY_FORM:{
            const data = actions.payload
            return {
                ...state,
                data            
            }
        }
        case fromActions.DELETE_COUNTRY:{
            const data =actions.payload;
            return {
                ...state,
            }
        }
        case fromActions.FAIL_COUNTRY:{
            const data =actions.payload;
            return {
                ...state,
                
            }
        }
    }
    return state;
}

export const getCountryMasterEntities = (state: CountryState) => state.entities;
export const getCountryMasterLoading = (state: CountryState) => state.loading;
export const getCountryMasterLoaded = (state: CountryState) => state.loaded;
export const getCountryMasterSingleCountry = (state: CountryState) => state.data;