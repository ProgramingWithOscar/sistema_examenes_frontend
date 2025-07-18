import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

//compontes creados
import { Navbar } from './components/navbar/navbar';
import { Signup } from './pages/signup/signup';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    Navbar,
    Signup
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema_examenes_frontend');
}
