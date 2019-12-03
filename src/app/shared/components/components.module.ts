import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    SelectComponent
  ]
})
export class ComponentsModule { }
