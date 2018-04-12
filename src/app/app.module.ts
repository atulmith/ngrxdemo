import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
// import { FormsModule } from '@angular/forms';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers ,CustomSeralizer } from "./store";

import { storeFreeze } from "ngrx-store-freeze";

const environment = {
  development: true,
  production: false
};
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSeralizer}],
  bootstrap: [AppComponent]
})
export class AppModule {}
