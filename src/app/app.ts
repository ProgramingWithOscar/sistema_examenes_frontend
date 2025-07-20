import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
//compontes creados
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Signup } from './pages/signup/signup';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    Navbar,
    Signup,
    Home,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema_examenes_frontend');
}
