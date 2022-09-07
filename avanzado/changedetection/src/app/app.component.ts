import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changedetection';
  //Variable para el ejemplo de REATTACH
  live:boolean = true;

  //valores ejemplo async pipe 
  items = [{}];
  items$ = new BehaviorSubject(this.items); // le pasmos un valor por defecto

  addItem()
  {
    const nuevoItem = Math.floor(Math.random()* 100) + 1;
    this.items.push({
      numero: nuevoItem
    })
    //Emitimos un nuevo valor de la ista de items
    //Al componente subscript 
    this.items$.next(this.items);
  }
}
