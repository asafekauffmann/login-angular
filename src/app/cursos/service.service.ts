import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService { // Serviço modelo para puxar informações de API externa
                              //  Nenhuma lógica pode ficar no component 
 
  constructor() { }

  getCursos() {
    return ['Java', 'Phiton', 'C#'];
  }
}
