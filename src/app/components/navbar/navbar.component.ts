import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }


  ngOnInit() {
  }

  logout(): void {
    let email = this.authService.usuario.email;
    this.authService.logout();
    swal('Logout', `Hola ${email}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }

}
