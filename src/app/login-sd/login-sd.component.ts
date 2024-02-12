import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-sd',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginSdComponent, RouterLink, RouterLinkActive],
  templateUrl: './login-sd.component.html',
  styleUrl: './login-sd.component.css'
})
export class LoginSdComponent {
  constructor(public router: Router) {}
}
