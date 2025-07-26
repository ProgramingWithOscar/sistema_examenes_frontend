import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Section1 } from '../components/section-1/section-1/section-1';
Section1
@Component({
  selector: 'app-home',
  imports: [Navbar, Section1],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
