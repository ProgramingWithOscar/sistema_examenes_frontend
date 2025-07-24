import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private loginStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  loginStatus$ = this.loginStatusSubject.asObservable();

  constructor(private http: HttpClient){}

  // llamamos para generar el token

   private hasToken(): boolean {
    return !!localStorage.getItem("token");
  }
  public generateToken(loginData: any){
    return this.http.post(`${baseURL}/generate-token`, loginData);
  }

  //iniciamos sesion y establecemos el token en el localstorage

  public loginUser(token: any){
    localStorage.setItem("token", token);
  }

   public isLoguedIn(): boolean {
    return this.hasToken();
  }

  // cerramos sesion y eliminamos el token
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return true;
  }

  // obtener el token
  public getToken(){
    return localStorage.getItem("token");
  }

  public setUser(user: any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr){
      return JSON.parse(userStr);
    }else {
      this.logout();
      return null;
    }
  }

  public getUsersRol(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getcurrentUser(){
    return this.http.get(`${baseURL}/current-user`);
  }
}
