import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
	message:string;
  constructor(private LogService : CommonService) { }

  ngOnInit() {
	this.LogService.currentMessage.subscribe(message => this.message = message)
  }

}
