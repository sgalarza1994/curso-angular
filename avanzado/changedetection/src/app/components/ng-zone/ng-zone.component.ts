import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss']
})
export class NgZoneComponent implements OnInit {


   progreso:number = 0; //valos que va ir de 0% a 100%
   texto:string = '' //Dentro o Fuera de Angular Zona;

  constructor(private _ngZone:NgZone) { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param terminar Metodo incremntar de 0 a 100 el valor de progrso
   */
  incrementarProrgeso(terminar:() => void)
  {
    this.progreso +=1;

    if(this.progreso < 100)
    {
      window.setTimeout(() =>{
        this.incrementarProrgeso(terminar); // recursiva
      },10)
    }
    else 
    {
      //ya habia terminado asi ejecutando el callbo
      terminar();
    }
  }
 /**
  * Implica que los cambios se ven en el HTML
  */
  aumentarDentroNgZone()
  {
     this.texto = 'DENTRO';
     this.progreso = 0;
     this.incrementarProrgeso(() => console.log(`${this.texto} de Angular Zone:
     Incremento terminado  
     `));
  }
  /**
   * Cambios no se van a ver en el HTML, hasta que se vuelve a meter el c
   * componente en el AGUNLAR FON
   */
  aumentarFueraNgZone()
  {
     this.texto = 'FUERA';
     this.progreso = 0;
     this._ngZone.runOutsideAngular(() =>{
      this.incrementarProrgeso(() =>{
        this._ngZone.run(
            () => {
              console.log(`${this.texto} de angular : Incremento termiando`)
            }
        )
      })
     })
     
  }
}
