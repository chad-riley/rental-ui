import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from "../apartment-data/apartment-data.service"

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  @Input()
  apartment: Apartment;
  error:string;
  message: String;

  constructor(private data:ApartmentDataService) { }

  activateListing(){
    this.data.activate(this.apartment).subscribe(
      apartments => {
        this.apartment.is_active = true;
      },
      e => this.message = 'Ruh Roh ' + e
    );

  }

  deactivateListing(){
    this.data.deactivate(this.apartment).subscribe(
      apartments => {
        this.apartment.is_active = false;
      },
      e => this.message = 'Ruh Roh ' + e
    );
  }

  likeListing(apartment: Apartment){

  }


  ngOnInit() {
    
  }

}
