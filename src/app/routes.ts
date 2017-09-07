import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AddComponent } from './components/add/add.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forget', component: ForgetComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'add', component: AddComponent }
];

