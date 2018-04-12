import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/throw";

import { Country } from "../models/country";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class CountryMasterService {
  
  private baseUrl: string = "http://localhost:3000/country/";
//   private baseUrl: string = "http://7402579b.ngrok.io/admin/";
  
  constructor(private http: HttpClient) {}

  createCountry(objtosave) : Observable<any>{
    let headers1 = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    var body1 = `objtosave=${JSON.stringify(objtosave)}`;//&files=` + bdform;
    // var body1 = bdform;
    console.log('createCountry',body1);
    var url2 = `${this.baseUrl}createcountry`;
      return this.http.post(url2 , body1  ,{headers: headers1}).pipe(
        map((res: any)=>{
          console.log('createCountry WS Response: ',res);
          return res;
        }),
        catchError(err => {
          console.log('createCountry WS Error: ',err);
          return err.json();
        } )
      );

      
  }
  
  getCountry() : Observable<any>{
    let headers1 = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    // var body1 = `objtosave=${JSON.stringify(objtosave)}`;//&files=` + bdform;
    // var body1 = bdform;
    // console.log('getCountry',body1);
    var url2 = `${this.baseUrl}getcountry`;
      return this.http.post(url2 , {headers: headers1}).pipe(
        map((res: any)=>{
          // alert('mapping get country');
          console.log('getCountry WS Response: ',res);
          return res;
        }),
        catchError(err => {
          // alert('error get country');
          console.log('getCountry WS Error: ',err);
          return err.json();
        } )
      );
  }

  getCountryEdit(id) : Observable<any>{
    let headers1 = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    var body1 = `id=${id}`;//&files=` + bdform;
    // var body1 = bdform;
    console.log('getCountryEdit',body1);
    var url2 = `${this.baseUrl}getcountryedit`;
      return this.http.post(url2 , body1 ,{headers: headers1}).pipe(
        map((res: any)=>{
          // alert('mapping get country');
          console.log('getCountryEdit WS Response: ',res);
          return res;
        }),
        catchError(err => {
          // alert('error get country');
          console.log('getCountryEdit WS Error: ',err);
          return err.json();
        } )
      );
  }

  editSaveCountry(objtosave,id) : Observable<any>{
    let headers1 = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    var body1 = `objtosave=${JSON.stringify(objtosave)}&id=${id}`;//&files=` + bdform;
    // var body1 = bdform;
    console.log('countryeditsave',body1);
    var url2 = `${this.baseUrl}countryeditsave`;
      return this.http.post(url2 , body1  ,{headers: headers1}).pipe(
        map((res: any)=>{
          console.log('countryeditsave WS Response: ',res);
          return res;
        }),
        catchError(err => {
          console.log('countryeditsave WS Error: ',err);
          return err.json();
        } )
      );

      
  }
  


}