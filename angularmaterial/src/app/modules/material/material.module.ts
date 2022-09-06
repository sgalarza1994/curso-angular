import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:
  [
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }
