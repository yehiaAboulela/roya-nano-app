import { ChangeDetectorRef, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    autoWidth: true,
    lazyLoad: true,
    margin: 30,
    items: 4,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: false,
  };

  // constructor(private cdr: ChangeDetectorRef) {}

  // ngAfterViewInit() {
  //   this.cdr.detectChanges(); // Detect changes after view initialization
  // }
}
