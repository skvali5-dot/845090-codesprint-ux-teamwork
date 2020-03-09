import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { Order } from '../Models/order';

@Component({
  selector: 'app-viewgiftcard',
  templateUrl: './viewgiftcard.component.html',
  styleUrls: ['./viewgiftcard.component.css']
})
export class ViewgiftcardComponent implements OnInit {

  list:Order[];
  constructor(private service:OrderService) {
    this.service.Get().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
   }

  ngOnInit() {
  }

}
