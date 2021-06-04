import { Component, OnInit } from '@angular/core';
import{MatDialog}from'@angular/material/dialog';
import {ModelviewComponent} from '../modelview/modelview.component';
import { Subscription } from 'rxjs';
import {GlobalshareService} from '../globalshare.service'

@Component({
  selector: 'app-addblock',
  templateUrl: './addblock.component.html',
  styleUrls: ['./addblock.component.css']
})
export class AddblockComponent implements OnInit {
  clickEventsubscription:Subscription;
  constructor(private dialog:MatDialog , private global:GlobalshareService) { }
  visibleadd:boolean=true;
  visibleblog:boolean=false;
  
  ngOnInit(): void {
    this.clickEventsubscription=this.global.getClickEvent().subscribe((id)=>{
      if(id == 1){
        this.visibleadd=false;
        this.visibleblog=true;

      }
     
   
        })
  }

  openmodel(){
    this.dialog.open(ModelviewComponent);
  }

}
