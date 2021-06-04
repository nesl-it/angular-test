import { Component, OnInit } from '@angular/core';
import{MatDialog}from'@angular/material/dialog';
import {GlobalshareService} from '../globalshare.service';

@Component({
  selector: 'app-modelview',
  templateUrl: './modelview.component.html',
  styleUrls: ['./modelview.component.css']
})
export class ModelviewComponent implements OnInit {

  constructor(private dilaog:MatDialog ,private  global:GlobalshareService) { }

  ngOnInit(): void {
  }

  close(){
    this.dilaog.closeAll();
  }
  selectblog(){
    this.dilaog.closeAll();
    this.global.sendClickEvent(1);
  
  }

}
