import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/loginService';

@Component({
  selector: 'app-login',
  standalone: true,  // Asegúrate de marcar el componente como standalone
  imports: [
    FormsModule,       // Importa FormsModule
    MatFormFieldModule, // Importa MatFormFieldModule
    MatInputModule      // Importa MatInputModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  public loginData = {
    "username" : "",
    "password": ""
  }

  constructor(private toastr:ToastrService, private loginService: LoginService, private router:Router){};
  ngOnInit(): void {
    // Aquí puedes inicializar datos si es necesario
  }

  formSubmit(form: any) {
    if(this.loginData.username.trim() === ""|| this.loginData.password.trim() === ""){
      this.toastr.warning("Los campos Nombre de usuario y Password son requeridos");
      return;
    }
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        this.loginService.loginUser(data?.token);
        this.loginService.getcurrentUser().subscribe((user: any) => {
              this.loginService.setUser(user);

              if (this.loginService.getUsersRol() == "ADMIN") {
                setTimeout(() => {
                  this.router.navigate(["admin"]);
                }, 200);
              } else if (this.loginService.getUsersRol() == "NORMAL") {
                this.router.navigate(["user-dashboard"]);
              } else {
                this.loginService.logout();
              }
            });

      },
      (error) => {
        this.toastr.error("Credenciales incorrectas, intenta nuevamente");
      }
    );
  }


}
