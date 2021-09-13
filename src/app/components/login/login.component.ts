import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*Declarando variável - do tipo usuário.ts e inicializando-a*/
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) /* injetando serviço*/  { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

}
