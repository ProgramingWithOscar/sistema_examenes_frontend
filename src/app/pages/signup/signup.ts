import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../services/user';

@Component({
  selector: 'app-signup',
  standalone: true,  // Asegúrate de marcar el componente como standalone
  imports: [
    FormsModule,       // Importa FormsModule
    MatFormFieldModule, // Importa MatFormFieldModule
    MatInputModule      // Importa MatInputModule
  ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService: User, private toastr:ToastrService) {}

  ngOnInit(): void {
    // Aquí puedes inicializar datos si es necesario
  }

  formSubmit(form: any) {
    if (this.user.username === '' || this.user.username == null && this.user.password === '' || this.user.password === null) {
      this.toastr.warning("El nombre de usuario y contraseña son requeridos");
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success("Usuario registrado con exito");
        form.resetForm();
      }, 
      (error) => {
        this.toastr.warning(error.error.message);
      }
    )
  }


}
