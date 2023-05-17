export class Persona {
    cedula: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    estado: boolean;

    constructor(cedula: string, nombres: string, apellidos: string, 
        fechaNacimiento: Date, estado: boolean) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.estado = estado;
    }

}