import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  bookChips: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  addBook(book) {
    this.bookChips.push(book);
  }
  removeChip(index) {
    this.bookChips.splice(index, 1);
  }
}
