import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertadorService {

  constructor() { }
  
  mensajero(texto){
    alert(texto);
  }
}
