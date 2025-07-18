import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {

  public user = {
    username: '',
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
