import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
  
  @Input()
  url:string;
  image:string;

  constructor() {

   }

  ngOnInit() {
  }




}
