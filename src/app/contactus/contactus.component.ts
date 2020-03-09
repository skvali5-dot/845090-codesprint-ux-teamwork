import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name:string;
  emailid:string;
  subject:string;
  submitted:boolean=false;
  contactForm:FormGroup;
  
  
    constructor(private formbuilder:FormBuilder) { }
  
    ngOnInit() {
      this.contactForm=this.formbuilder.group({
          name:['',Validators.required],
          emailid:['',[Validators.required,Validators.email]],
          subject:['',Validators.required]
      });
    }
    onSubmit()
    {
      this.submitted=true;
      
  
    }
    get f()
  {
    return this.contactForm.controls;
  }
}
