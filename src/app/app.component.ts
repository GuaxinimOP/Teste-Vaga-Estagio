import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginSdComponent } from './login-sd/login-sd.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginSdComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TesteVagaEstagio';
}
