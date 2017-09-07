import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  photo:string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  photo1:string = 'https://i.pinimg.com/originals/18/31/85/1831855c77447d47bf02a5620ff602aa.jpg';
  constructor() { }

  ngOnInit() {
  }

}
