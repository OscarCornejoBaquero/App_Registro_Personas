import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
  
})

export class CuerpoComponent {
  form!: FormGroup; 
    cedula = "";
    nombres = "";
    apellidos = "";
    fechaNacimiento = new Date();
    listPersonas: Persona[] = [];
    
    ngOnInit(): void {

    }
agregarPersona() {
  const Persona: Persona = {
    cedula: this.cedula,
    nombres: this.nombres,
    apellidos: this.apellidos,
    fechaNacimiento: this.fechaNacimiento,
    estado: true,
   
  }
  this.listPersonas.push(Persona);
  this.cedula = "0927218487";
  this.nombres = "Oscar Leonardo";
  this.apellidos = "Cornejo Baquero";
  this.fechaNacimiento = new Date();
  } 
  
}
