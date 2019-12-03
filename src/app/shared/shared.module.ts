import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesModule,
    ComponentsModule
  ]
})
export class SharedModule { }
