import { ImgErrorDirective } from './img-error.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ImagePath } from 'src/app/model';
import { By } from '@angular/platform-browser';

@Component({
  template: `<img id="image" appImgError [src]="url" alt="" />`
})
class ImageComponent {
  url: string;
}

describe('ImgErrorDirective', () => {

  let fixture: ComponentFixture<ImageComponent>;
  let component: ImageComponent;
  let imageElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageComponent, ImgErrorDirective]
    });

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    imageElement = fixture.debugElement.query(By.css('#image'));
  });

  it('Correct image url should work', (done) => {
    component.url = ImagePath.Correct;
    fixture.detectChanges();
    imageElement.nativeElement.addEventListener('load', () => {
      expect(imageElement.nativeElement.src).toContain(ImagePath.Correct);
      done();
    });
  });

  it('Wrong image url should be changed to error image', (done) => {
    component.url = ImagePath.Wrong;
    fixture.detectChanges();
    imageElement.nativeElement.addEventListener('load', () => {
      expect(imageElement.nativeElement.src).toContain(ImagePath.Error);
      done();
    });
  });

});
