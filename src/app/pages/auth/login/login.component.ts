import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   usuario = new Usuario();

  constructor(
    private authService : AuthService,
    private router : Router
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      swal('Login', `Hola ${this.authService.usuario.email} ya estás autenticado!`, 'info');
      this.router.navigate(['/']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.email == null || this.usuario.password == null) {
      swal('Error Login', 'Username o password vacías!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log("Si quedo");
      console.log(response);

      this.authService.guardarUsuario(response.user);
      this.authService.guardarToken(response.token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/']);
      swal('Login', `Hola ${usuario.email}, has iniciado sesión con éxito!`, 'success');
    }, err => {

        swal('Error Login', 'Usuario o clave incorrectas!', 'error');

    });
  }

}
