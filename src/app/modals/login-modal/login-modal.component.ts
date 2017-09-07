import { Component, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css','../../components/signup/signup.component.css']
})
export class LoginModalComponent {

  constructor(
    private router: Router,
    public dialogRef: MdDialogRef<LoginModalComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  routeToSomewhere(toRoute: string){
    this.onNoClick();
    this.router.navigate([toRoute])
  }

}
