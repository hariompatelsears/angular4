import { Component, OnInit, Input } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs';



@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class BikeInfoComponent implements OnInit {
 bike = null;
 bikeList = 	[
  { id: 1, model: 'CBR250R', manufacturer: 'Honda' },
  { id: 2, model: 'CBR150R', manufacturer: 'Honda' },
  { id: 3, model: 'Ninja250R', manufacturer: 'Kawasaki' },
  { id: 4, model: 'CBR1000R', manufacturer: 'Honda' },
  { id: 5, model: 'Ninja1000RR', manufacturer: 'Kawasaki' }
]
  constructor(private route: ActivatedRoute,private router: Router) {
	this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        for(var k in this.bikeList) {
	  if (this.bikeList[k].id == params['id']) {
		console.log(this.bikeList[k]);
		this.bike = this.bikeList[k];
		break;
	  }
	}
      }
    });
  }

  ngOnInit() {
  }

}
