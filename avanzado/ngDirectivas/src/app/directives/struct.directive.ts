import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStruct]',

})
export class StructDirective {

  private _mostrando:boolean=false;
  constructor(private _templateRef:TemplateRef<any>
    , private _viewContainerRef:ViewContainerRef
    ) { }

    @Input() set rolCorrecto(codicion:boolean)
    {
      if(codicion && !this._mostrando)
      {
        this._viewContainerRef.createEmbeddedView(this._templateRef); // creamos el elemento
        this._mostrando = true;
      }
      else 
      {
        this._viewContainerRef.clear(); // Eliminamos el elemento 
        this._mostrando = false;
      }


    }

}
