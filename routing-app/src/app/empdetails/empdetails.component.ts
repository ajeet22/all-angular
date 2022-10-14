import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  id:any;

  constructor(private route:ActivatedRoute, public location: Location) {
    location:Location;
    this.location=location;
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('empid');
  }

  getBack():void{
    this.location.back(); // send back to previous screen
  }

}
