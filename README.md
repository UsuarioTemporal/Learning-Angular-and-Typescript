# **Learning-Angular-and-Typescript**

## **¿Que es angular?**

>***Angular es un framework de desarrollo** para JavaScript creado por Google. La finalidad de Angular es facilitarnos el desarrollo de aplicaciones web SPA(single-page-aplication, o aplicación de página única, es una aplicación web o es un sitio web que cabe en una sola página con el proposito de dar una experiencia mas fluida a los usuario como una aplicación de escritorio) y además darnos herramientas para trabajar con los elementos de una web de una manera más sencilla y óptima.*

## **SPA**

Usando SPA el código generado por las herramientas o las tecnologias básicas para crear una página web se cargan de una vez es decir que los recursos que irá necesitando la página se cargara dinamicamente.

La página no tendra que cargar otra vez ningún punto del proceso tampoco se transfiere a otra página (AJAX)

>*Una aplicación web SPA creada con Angular es una web de una sola página, en la cual la navegación entre secciones y páginas de la aplicación, así como la carga de datos, se realiza de manera dinámica, casi instantánea, asincronamente haciendo llamadas al servidor (backend con un API REST) y sobre todo sin refrescar la página en ningún momento.*

## **¿Que es Typescript?**

> *TypeScript es un tipo de superset de javascript que compila a javascript plano*

Typescript es un lenguaje de programacion tipada, usemos esta analogia :

Sass es a CSS como TypeScript es a Javascript, podemos usar las ultimas caracteristiocas de javascript.

### **Instalación**

```sh
    $ npm install -g typescript
    $ tsc --version
```

## **Compilación automática**

```sh
    $ tsc --watch
```

La opción `--watch` del compilador de typescript, permite observar y recompilar nuestros archivos con cada cambio.El resultado de la compilación para cada archivo `.ts` se autogenera en el directorio `dist/`

## **Ejecutar el código**

Para poder compilar typescript necesitamos del motor Node.js (pequeño spam xd , tengo un repositorio de mi aprendizaje de Node.js )

```sh
    $ node dist/main/type.js
    $ node dist/main.js
```

```sh
    $ tsc test.ts
```

## **Archivo tsconfig**

- Es un archivo JSON
- Su presencia indica que el directorio es la raíz de un proyecto TypeScript
- Permite configurar opciones para el compilador
- Especifica los archivos principaless

- Generación :
    - `tsc --init`

- Atributo file en tsconfig : permitira referenciar archivos simples

```json
    {
        "compilerOptions":{...},
        "files":[
            "src/a.ts", /* con esto le decimos que solo compilara estos archivos en la carpeta del outDir*/
            "src/b.ts"
        ],
        "include":[
            "src/*.ts" // para leer de manera recursiva src/**/*.ts
        ]
        ,
        "exclude":[
            "src/node_modelos" // archivos que no quermos tomar en cuenta en nuestro proyecto
        ]
    }
```

```python
    # Las citas mas frecuentes fueron usadas desde https://victorroblesweb.es y wikipedia

    # Autor : Thom Maurick Roman Aguilar
    # Estudiante de la carrera Ingenieria de Sistemas
```