export class Alumno {
    public id: number;
    public nombre: string; 
    public apellidos: string;
    public ciudad: string;
    public curso: string;
    public imagen: string; 

    constructor (id: number, nombre: string, apellidos: string, ciudad: string, curso: string, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos; 
        this.ciudad = ciudad;
        this.curso = curso;
        this.imagen = imagen;
    }

}