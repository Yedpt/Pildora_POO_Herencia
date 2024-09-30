class Persona {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar(): void {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  class Empleado extends Persona {
    puesto: string;
  
    constructor(nombre: string, edad: number, puesto: string) {
      super(nombre, edad);
      this.puesto = puesto;
    }
  
    trabajar(): void {
      console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
    }
  }
  
  const empleado1 = new Empleado('María', 28, 'Desarrolladora');
  empleado1.saludar();  // Hola, soy María y tengo 28 años.
  empleado1.trabajar(); // María está trabajando como Desarrolladora.
  