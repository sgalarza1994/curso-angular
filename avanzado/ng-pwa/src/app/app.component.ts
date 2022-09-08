import { Component, OnInit } from '@angular/core';
//imports necesarios para trabajar con Service Worker 

import {SwUpdate, VersionEvent} from '@angular/service-worker'
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 constructor(private sworkerUpdate:SwUpdate){

 }
  title = 'ng-pwa';
  ngOnInit(): void {
    this.recargarCache();
  }
 recargarCache()
 {
  //Comporamos que service worke esta activo
  if(this.sworkerUpdate.isEnabled)
  {
    this.sworkerUpdate.versionUpdates.subscribe({
      next: (event:VersionEvent) =>{


        if(confirm('hay una versio nde al aplcacion desea cargarla'))
          {
            //si confirma recargamos para que 
            this.sworkerUpdate.activateUpdate().then((value:boolean) =>{
              window.location.reload();
            }).catch((error) => console.log('error de la carga'))
            .finally(() => console.log('nueva version activada'))
          
           
          }

      


        //detecta una version de la aplicacion y emite 
        //Consultamos al usuari oque si  desea ccargar la nuevv ersion
       
      },
      error : () =>{
        console.error('ha ocurrido un error')
      },
      complete : () =>{
        console.info('finalizada recarga de version')
      }
    })
  }
 }

  

}
