import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/cursos/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  saidaVariavel: string; //Cria

  cursos: string[]; //cria

  constructor(private serviceService: ServiceService) { 
    this.saidaVariavel = 'Opa, Interpolação de variavel'; // Inicia

    this.cursos = this.serviceService.getCursos();
  }

  ngOnInit(): void {
  }

}
