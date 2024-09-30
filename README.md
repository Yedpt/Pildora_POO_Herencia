Este archivo README.md proporciona una guía clara y detallada para que los interesados puedan seguir paso a paso el proceso de configuración y ejecución del proyecto. ¡Espero que te sea útil en tu proceso de aprendizaje!

# Pildora de Programacion orientada a objetos (POO) - Herencia 
Este proyecto muestra cómo utilizar alias de tipos y enums en TypeScript para definir roles de usuarios en una aplicación sencilla.

Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

Node.js (descárgalo desde nodejs.org)
npm (incluido con Node.js)
Visual Studio Code o cualquier otro editor de texto con soporte para TypeScript
Pasos para Configurar y Ejecutar el Proyecto
### 1. Clonar el Repositorio o Crear la Carpeta del Proyecto
Para clonar el proyecto, ejecuta el siguiente código:

git clone https://github.com/Yedpt/Pildora_POO_Herencia.git

### 2. Inicializar el Proyecto Node.js
Dentro de la carpeta del proyecto, abre una terminal y ejecuta el siguiente comando para inicializar el proyecto Node.js:
### copia el código => npm init -y
Este comando creará un archivo package.json que contiene las configuraciones del proyecto Node.js.

## 3. Instalar TypeScript 
Ahora necesitas instalar TypeScript. Para hacerlo, ejecuta:
Copia el código => npm install -g typescript
Esto instalará TypeScript globalmente en tu sistema. Si quieres instalarlo localmente en tu proyecto, puedes ejecutar: => npm install typescript --save-dev

## 4. Crear el Archivo de Configuration de TypeScript.
Para generar el archivo tsconfig.json, que controla las opciones de compilación de TypeScript, ejecuta: 
=> tsc --init

## 5. Crear el Archivo prueba.ts
Crea un archivo llamado prueba.ts en el directorio raíz del proyecto. Aquí es donde escribirás el código de TypeScript para manejar los alias de tipos y enums.


## 6. Escribir el Código de TypeScript
Copia el siguiente código en tu archivo index.tsc:
// 1. Alias de tipos: Definir tipos personalizados para manejar información de usuarios

type UserID = number;
type UserName = string;

type User = {
    id: UserID;
    name: UserName;
    role: UserRole;
};

// 2. Enum: Definir los roles disponibles

enum UserRole {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest",
}

// 3. Función para crear un nuevo usuario usando los tipos y enum definidos

function createUser(id: UserID, name: UserName, role: UserRole): User {
    return { id, name, role };
}

// 4. Crear y mostrar usuarios con diferentes roles

const adminUser = createUser(1, "Alice", UserRole.ADMIN);
const regularUser = createUser(2, "Bob", UserRole.USER);
const guestUser = createUser(3, "Charlie", UserRole.GUEST);

console.log(adminUser);
console.log(regularUser);
console.log(guestUser);

## 7. Compilar el Archivo TypeScript
Compila el archivo index.ts para convertirlo en JavaScript ejecutando: => tsc index.ts
Esto generará un archivo index.js en el directorio raíz del proyecto.

## 8. Ejecuta el Archivo JavaScript
Para ejecutar el archivo compilado, utiliza Node.js En la terminal, escribe: => node index.js
Deberías ver la salida en la terminal mostrando los tres usuarios con diferentes roles.

Conclusión
Este proyecto trata de muestrarte cómo usar alias de tipos y enums en TypeScript para definir roles de
