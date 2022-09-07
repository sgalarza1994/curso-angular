import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-struct',
  templateUrl: './ejemplo-struct.component.html',
  styleUrls: ['./ejemplo-struct.component.scss']
})
export class EjemploStructComponent implements OnInit {

  rol:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarRol()
  {
    console.log('llegamos al metodo');
    this.rol = !this.rol;
  }
}
