import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from './../../../shared/services/language.service';
import { Component } from '@angular/core';
declare var Fancybox: any;
@Component({
    selector: 'app-nano-graphene-prods',
    templateUrl: './nano-graphene-prods.component.html',
    styleUrl: './nano-graphene-prods.component.css',
    standalone: false
})
export class NanoGrapheneProdsComponent {
  constructor(private LanguageService: LanguageService) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    dots: true,
    navSpeed: 700,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  lang: string = 'en';

  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }

  openVideo(src: string): void {
    Fancybox.show(
      [
        {
          src: src,
          type: 'iframe',
          options: {
            iframe: {
              preload: false,
              width: 640,
              height: 360,
            },
          },
        },
      ],
      {
        dragToClose: true,
        closeButton: true,
        Toolbar: true,
        Thumbs: true,
        infinite: false,
        animated: true,
      }
    );
  }
}
