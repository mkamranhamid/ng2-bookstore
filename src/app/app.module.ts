import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule, MdMenuModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule, MdDialogModule, MdInputModule, MdChipsModule } from '@angular/material';

import {appRoutes} from './routes';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AddComponent } from './components/add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginModalComponent,
    SignupComponent,
    ForgetComponent,
    TimelineComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdMenuModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdGridListModule,
    MdDialogModule,
    MdInputModule,
    MdChipsModule
  ],
  providers: [],
  entryComponents: [ LoginModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
