import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Mi primera app con Angular';
  textoInput: string;
  textoBoton: string;
  textoTarea: string;
  botonPulsado: boolean = false;
  tareas: string[] = [];

  mostrarTexto() {
    this.textoBoton = `Has pulsado el boton y la variable contiene ${this.textoInput}`;
    if (this.botonPulsado) {
      this.botonPulsado = false;
    } else { this.botonPulsado = true }
  }

  agregarLista(){
      this.tareas.push(this.textoTarea);
  }

}

