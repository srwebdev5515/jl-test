import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgErrorDirective } from './img-error/img-error.directive';
import { ScrollToDirective } from './scroll-to/scroll-to.directive';



@NgModule({
  declarations: [
    ImgErrorDirective,
    ScrollToDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgErrorDirective,
    ScrollToDirective
  ]
})
export class DirectivesModule { }
