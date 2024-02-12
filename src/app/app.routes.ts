import { Routes } from '@angular/router';
import { LoginSdComponent } from './login-sd/login-sd.component';

export const routes: Routes = [
    { path: 'pass', component: LoginSdComponent },
    { path: 'login', component: LoginSdComponent },
    { path: '', redirectTo:'/login', pathMatch:'full'}
];
