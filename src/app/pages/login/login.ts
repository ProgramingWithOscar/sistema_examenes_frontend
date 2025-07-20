import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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

  constructor(private toastr:ToastrService, private loginService: LoginService){};
  ngOnInit(): void {
    // Aquí puedes inicializar datos si es necesario
  }

  formSubmit(form: any) {
    if(this.loginData.username.trim() === ""|| this.loginData.password.trim() === ""){
      this.toastr.warning("Los campos Nombre de usuario y Password son requeridos");
      return;
    }
    this.loginService.generateToken(this.loginData).subscribe(
      (data) => {
        this.toastr.success("Login exitoso");
      },
      (error) => {
        this.toastr.error("Credenciales incorrectas, intenta nuevamente");
      }
    );
  }


}
