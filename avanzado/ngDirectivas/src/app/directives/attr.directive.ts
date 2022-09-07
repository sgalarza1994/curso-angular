import { Directive, Input,HostListener,ElementRef, Host } from '@angular/core';

@Directive({
  selector: '[appEstilos]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input() highlightColor = '';

  

  constructor(private _elementRef:ElementRef) { }
/**
 * Comportamiento para mouse entrer
 */
  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.highlightColor || this.defaultColor || 'tomato')
  }
/**
 * Comportramiento para mouse leave
 */
  @HostListener('mouseleave') onMouseLeave(){
    this._cambiarColor(null)
  }



  /**
   * 
   * @param colo Para cambiar el color de fondo de un componente
   */
  private _cambiarColor(colo:string | null)
  {
    this._elementRef.nativeElement.style.backgroundColor = colo;
  }
}
