import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
  
})

export class CuerpoComponent {
  form!: FormGroup; 
   
    listPersonas: Persona[] = [];
    
    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        cedula: new FormControl(''),
        nombres: new FormControl(''),
        apellidos: new FormControl(''),
        fechaNacimiento: new FormControl('')
      });
    }
agregarPersona() {
  const Persona: Persona = {
    cedula: this.form.value.cedula,
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      fechaNacimiento: this.form.value.fechaNacimiento,
    estado: true,
   
  }
  this.listPersonas.push(Persona);


  } 
  
}
