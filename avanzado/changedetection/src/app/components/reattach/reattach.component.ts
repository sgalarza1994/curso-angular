import { Component, OnInit,Injectable,ChangeDetectorRef } from '@angular/core';


@Injectable({
  providedIn : 'root'
})
export class PrecioBitcoinProvider
{
  precio:number = 100;
  constructor()
  {
    //Cada media segundo se va generar un nuevo precio del bitcoin
    setInterval(()=>{
      this.precio = Math.floor(Math.random()*1000) + 100;
      console.log(`precio actual ${this.precio}$`);
    },500)
  }
}

@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.scss'],
  inputs : ['enVivo']
})
export class ReattachComponent implements OnInit {

  constructor(private _ref:ChangeDetectorRef,public precioBitcoin:PrecioBitcoinProvider) { }
  mostrarEnVivo:boolean = true;
  ngOnInit(): void {
  }
   set enVivo(valor:boolean)
   {
    this.mostrarEnVivo = valor;
    if(valor)
      this._ref.reattach(); // Reacomplamos TS Y HTML para ver los cambios en vivo
    else 
     this._ref.detach(); // desacomplaos el TS y HTM para no actualizar la vista con los cambios

    // this._ref.markForCheck();
   }
}
