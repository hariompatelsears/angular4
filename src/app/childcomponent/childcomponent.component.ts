import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() messagefromparent: string;
  childmessage = 'from Child message';
  passthismessage = "Passing message to parent on event";
  @Output() messageEvent = new EventEmitter<string>();
  message:string;
  constructor(private LogService : CommonService) { }

  ngOnInit() {
	    this.LogService.currentMessage.subscribe(message => this.message = message)
  }
  
  sendMessage(){
	this.messageEvent.emit(this.passthismessage);
  }
  
   newMessage() {
    this.LogService.changeMessage("Hello from Sibling")
  }


}
