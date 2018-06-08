import { Component,ViewChild, OnInit,AfterViewInit  } from '@angular/core';
import {ChildcomponentComponent} from '../childcomponent/childcomponent.component';


@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements AfterViewInit  {
	messagetochild = "From Parent message";
	messagefromchild :string;
	message:string;
	
	@ViewChild(ChildcomponentComponent) child;
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.messagefromchild = this.child.childmessage;
  }
  receiveMessage($event) {
    this.message = $event;
  }



}
