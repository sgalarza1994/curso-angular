import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class OnPushComponent implements OnInit {

 // valor que se va incrmentar cada seugndo en archivo TS
 //  y que depende de la estrategia de Change Detection sus cambios se van a poder ver en el HTML
  segundos:number =0;
  constructor() { }

  ngOnInit(): void {
    setInterval(() =>{
      //Incrementar el valor 
      this.segundos ++;
      //Mostramos el valor por consola
      console.log(`segundos transcrurdos ${this.segundos} segundos`)
    },1000)
  }

}
