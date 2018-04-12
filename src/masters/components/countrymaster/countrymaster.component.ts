import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Country } from "../../models/country";
@Component({
  selector: 'app-countrymaster',
  templateUrl: './countrymaster.component.html',
  styleUrls: ['./countrymaster.component.css']
})
export class CountrymasterComponent implements OnInit {
  @Input() countryin: Country[]
  @Input() countryinForm: Country
  @Output() countryout = new EventEmitter<Country>()
  @Output() editid = new EventEmitter<any>()

  country: any;
  
  constructor(
    private fb: FormBuilder
  ) 
  { 

    this.country = this.fb.group({

      name: ["", Validators.required],
      aliasname: ["", Validators.required],
      
    });

  }

  onSubmit(value){
    this.countryout.emit(value);
  }

  Edit(event){
    this.editid.emit(event);
  }

  ngOnInit() {
  }

}
