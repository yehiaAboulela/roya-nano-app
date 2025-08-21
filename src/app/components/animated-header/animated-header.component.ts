import { Component, AfterViewInit, LOCALE_ID, Inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-animated-header',
  templateUrl: './animated-header.component.html',
  styleUrls: ['./animated-header.component.css'],
  standalone: false,
})
export class AnimatedHeaderComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {}

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 4000,
  };
}
