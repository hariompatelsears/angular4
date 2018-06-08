import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { CommonService } from '../common.service';





@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})

export class BikeComponent implements OnInit {
  bikes = 	[
  { id: 1, model: 'CBR250R', manufacturer: 'Honda' },
  { id: 2, model: 'CBR150R', manufacturer: 'Honda' },
  { id: 3, model: 'Ninja250R', manufacturer: 'Kawasaki' },
  { id: 4, model: 'CBR1000R', manufacturer: 'Honda' },
  { id: 5, model: 'Ninja1000RR', manufacturer: 'Kawasaki' }
]
  constructor(private LogService : CommonService) { }

  ngOnInit() {
	this.LogService.logging("Service working")
  }

}
