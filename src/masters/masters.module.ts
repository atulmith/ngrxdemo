import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountrymasterRoutingModule } from "./masters-routing.module";
import { CountrymasterComponent } from "./components/countrymaster/countrymaster.component";
import { CountrymasterContainer } from "./containers/countrymaster/countrymaster.component";

import { CountryDetailsComponent } from "./components/countrydetails/countrydetails.component";
import { CountryDetailsContainer } from "./containers/countrydetails/countrydetails.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import * as fromServices from "./services";

import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "./store";
import { EffectsModule } from "@ngrx/effects";

const comp = [
  CountrymasterComponent,
  CountrymasterContainer,
  CountryDetailsComponent,
  CountryDetailsContainer
];

@NgModule({
  imports: [
    CommonModule,
    CountrymasterRoutingModule,
    StoreModule.forFeature("masters", reducers),
    EffectsModule.forFeature(effects),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: comp,
  providers: [...fromServices.services]
})
export class MastersModule {}
