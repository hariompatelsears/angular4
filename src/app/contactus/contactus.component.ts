import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule,FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';




@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  apiRoot: string = "http://httpbin.org";
  constructor(private http: Http) {
  }



  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
	  // CUTOME VALIDATE FUNCTION emailDomainValidator
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
  onSubmit() {
  if (this.myform.valid) {
    console.log("Form Submitted!");
	let url = `/assets/test.txt`;
    this.http.post(url,this.myform.value).subscribe(res => console.log(res.json()));
 
}
}
onReset() {
    this.myform.reset();
}
}