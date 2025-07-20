import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(private HttpClient: HttpClient){

  }

  public addUser(user: any){
    return this.HttpClient.post(`${baseURL}/users/`, user);
  }
}
