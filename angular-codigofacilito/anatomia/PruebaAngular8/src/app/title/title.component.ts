import { Component } from '@angular/core'; // este es el elemento principal para crear compenentes -- este es un decorador
// este decorador marca una clase como un componente de angular y ademas permite que cofiguremos

@Component({ //configurar los metadatos que describen nuetro compenente
    select:'title'  // selector para identificar a nuestro componente -- este sera el nombre de la etiqueta que nosotros utilizaremos
})
export class TitleComponent{

}
