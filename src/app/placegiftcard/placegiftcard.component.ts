import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import { Order } from '../Models/order';
import { OrderService } from '../Services/order.service';


@Component({
  selector: 'app-placegiftcard',
  templateUrl: './placegiftcard.component.html',
  styleUrls: ['./placegiftcard.component.css']
})
export class PlacegiftcardComponent implements OnInit {

  
  placegift: FormGroup;
  submitted:boolean;
  gift:Order;
  constructor(private formBuilder:FormBuilder,private service:OrderService) { }

  ngOnInit() {
    this.placegift = this.formBuilder.group({
      inr: ['',[Validators.required,Validators.pattern('^[0-9]{1,8}$')]],
      paisa:['',[Validators.required,Validators.pattern('^[0-99]{1,2}$')]],
      fn:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      ln:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      sa:['',[Validators.required,Validators.pattern('^[a-z A-Z0-9-:]{3,30}$')]],
      city:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,30}$')]],
      state:['',[Validators.required,Validators.pattern('^[a-z A-Z]{3,30}$')]],
      pn:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      bfn:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      bln:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      emailid: ['', [Validators.required,Validators.email]],
      country:['',[Validators.required]],
       mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     
     
  });
}
get f() { return this.placegift.controls; }
OnSubmit(){
this.submitted=true;
if(this.placegift.valid){
  this.gift=new Order();
  this.gift.sno='S'+Math.round(Math.random()*1000);
  this.gift.amount=this.placegift.value["inr"]+this.placegift.value["paisa"];
 
 
  this.gift.shippingaddress=this.placegift.value["sa"];
  this.gift.city=this.placegift.value["city"];
 
  this.gift.buyername=this.placegift.value["bfn"]+this.placegift.value["bln"];
  this.gift.contact=(this.placegift.value["mobileno"]);
 
  console.log(this.gift);
  this.service.Add(this.gift).subscribe(res=>{
    this.gift=res;
    alert("Order placed");
   
  })
  alert("added")
}
  else
alert("please fill the details in the form")

}




}
