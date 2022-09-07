import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import * as Mock from 'mockjs'

@Injectable({
  providedIn: 'root'
})
export class DataListProvider 
{
  //metodo que devuelve una lista nombres aleatoros
  get data()
  {
    const RandoName = Mock.Random;
    return [
        RandoName.first(),
        RandoName.first(),
        RandoName.first(),
        RandoName.first()
      ]
    
  }
}


@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss']
})
export class DetachComponent implements OnInit {

  constructor(private _ref:ChangeDetectorRef,public dataListProvider:DataListProvider) { }

  ngOnInit(): void {
    //* Desacoplamos el componente  del html con el metodo DETACH
    this._ref.detach();


    /**
     * Cuanodu n compnente esta desacoplado solo hay dos forma de decirle que
     * replique los cambios en el HTML
     * 1. utilizando el metodo detectChanges => detecta los cambios en ese momento y lo envia html
     * 2. reattach() => mostrado en el otro ejemplo sirve para volver acoplar el componente
     */
    //Cada 3 segundos le decimo angular que revise los nombes generados
    // Es decir que detecte los cambios en el componentes ylos replique en el HTML


    setInterval(() =>{
      //Detectamos los cambios y reacoplamos 
      this._ref.detectChanges();
    },3000)

  }

}
