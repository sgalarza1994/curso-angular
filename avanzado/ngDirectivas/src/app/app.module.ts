import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploLifeCicleComponent } from './components/ejemplo-life-cicle/ejemplo-life-cicle.component';
import { EjemploattrComponent } from './components/ejemploattr/ejemploattr.component';
import { EjemploStructComponent } from './components/ejemplo-struct/ejemplo-struct.component';
import { AttrDirective } from './directives/attr.directive';
import { StructDirective } from './directives/struct.directive';
import { LifeCicleDirective } from './directives/life-cicle.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EjemploLifeCicleComponent,
    EjemploattrComponent,
    EjemploStructComponent,
    AttrDirective,
    StructDirective,
    LifeCicleDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
