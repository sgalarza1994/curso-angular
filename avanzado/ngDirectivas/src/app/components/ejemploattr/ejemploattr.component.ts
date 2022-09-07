import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemploattr',
  templateUrl: './ejemploattr.component.html',
  styleUrls: ['./ejemploattr.component.scss']
})
export class EjemploattrComponent implements OnInit {

  //Color para subrary los textos
  color:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
