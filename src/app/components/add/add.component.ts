import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css','../timeline/timeline.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  previewImage(e){
    console.log('e ',e);
    console.log('e files ',e.target.files[0]);

  }

}
