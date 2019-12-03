import { Directive, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective implements AfterViewInit, OnDestroy {

  sub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngAfterViewInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      if (params.id) {
        const element = document.getElementById(params.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          window.scroll(0, rect.top);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
