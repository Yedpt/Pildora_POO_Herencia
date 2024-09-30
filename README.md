# **Píldora: Programación Orientada a Objetos (POO) y Herencia en JavaScript con TypeScript**

## **Descripción**

Este repositorio contiene un ejemplo práctico de **Programación Orientada a Objetos (POO)** y **herencia** implementado en **JavaScript** usando **TypeScript**. Aprenderás los conceptos básicos de clases, objetos, herencia, y cómo estructurar un proyecto con TypeScript, para luego ejecutarlo con Node.js.

## **Índice**

1. [Conceptos Clave](#conceptos-clave)
2. [Requisitos Previos](#requisitos-previos)
3. [Instrucciones de Instalación](#instrucciones-de-instalación)
4. [Ejemplo Práctico de POO y Herencia](#ejemplo-práctico-de-poo-y-herencia)


---

## **Conceptos Clave**

### **Programación Orientada a Objetos (POO)**
La POO es un paradigma de programación que organiza el software en torno a objetos, los cuales son instancias de **clases**. Las clases definen atributos (propiedades) y comportamientos (métodos).

### **Herencia**
La **herencia** permite a una clase (subclase) heredar propiedades y métodos de otra clase (superclase). Esto promueve la reutilización del código y facilita la creación de estructuras jerárquicas.

---

## **Requisitos Previos**

- **Node.js** (>=14.x)
- **npm** (>=6.x)
- **Git**
- **TypeScript**

---

## **Instrucciones de Instalación**

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Yedpt/Pildora_POO_Herencia.git
   cd nombre-del-repo
2. Inicializa el proyecto con npm:
   npm init -y

3. Instala TypeScript como dependencia de desarrollo:
    npm install typescript --save-dev

4. Configurar un proyecto de TypeScript En la carpeta raíz de tu proyecto, ejecuta:
   tsc --init
   
5. Para compilar tus archivos .ts debes escribir el siguiente formato:
   tsc <nombre_archivo>.ts

## ** ejemplo-práctico-de-poo-y-herencia**
 6. Escribir el Código de TypeScript:
    
Copia el siguiente código en tu archivo prueba.ts:
// 1.definimos la clase padre Persona, que defina una estructura basica que contiene 2 propiedades y un metodo:

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


// 2. definimos la clase hija Empleado y herederá la clase padre Persona, heredando asi todas sus propiedades y metodos , esto es la HERENCIA en POO , permite reutilizar el codigo de la clase base , se utiliza el metodo super() para llamar al constructor de la clase base Persona: 


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


// 3. Creamos una instancia de Empleado, se crea un objeto empleado1 a partir de la clase Empleado, este objeto se inicializa con el nombre Maria , edad 28 , y puesto de Desarrolladora, luego se llama a los 2 metodos heredados de la clae base y derivados de la subclase:

     const empleado1 = new Empleado('María', 28, 'Desarrolladora');
  empleado1.saludar();  // Hola, soy María y tengo 28 años.
  empleado1.trabajar(); // María está trabajando como Desarrolladora.
    

// 4. ejecutamos tsc <nombre>.ts

//5. esto nos generará un archivo js , y podremos utilizar el comando node <nombre>.js para ejecutar el codigo.
