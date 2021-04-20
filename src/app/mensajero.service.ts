import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {

  constructor() { }

  mensajero(texto) {
    console.log(texto);
  }
}
