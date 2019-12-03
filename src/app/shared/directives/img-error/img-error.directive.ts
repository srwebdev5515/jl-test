import { Directive, ElementRef } from '@angular/core';
import { ImagePath } from 'src/app/model';

@Directive({
  selector: '[appImgError]'
})
export class ImgErrorDirective {

  constructor(el: ElementRef<HTMLImageElement>) {
    el.nativeElement.onerror = () => {
      el.nativeElement.src = ImagePath.Error;
    };
  }

}
