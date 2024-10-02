import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from './../../../shared/services/language.service';
import { Component } from '@angular/core';
declare var Fancybox: any;
@Component({
  selector: 'app-ppf',
  templateUrl: './ppf.component.html',
  styleUrl: './ppf.component.css',
})
export class PpfComponent {
  constructor(private LanguageService: LanguageService) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
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

  videoGallery = [
    {
      src: 'https://www.youtube.com/embed/FUKmyRLOlAA',
      type: 'iframe',
      options: {
        iframe: {
          preload: false,
          width: 640,
          height: 360,
        },
      },
    },
    {
      src: 'https://www.youtube.com/embed/FUKmyRLOlAA',
      type: 'iframe',
      options: {
        iframe: {
          preload: false,
          width: 640,
          height: 360,
        },
      },
    },
    {
      src: 'https://www.youtube.com/embed/FUKmyRLOlAA',
      type: 'iframe',
      options: {
        iframe: {
          preload: false,
          width: 640,
          height: 360,
        },
      },
    },
  ];

  openVideo(index: number): void {
    Fancybox.show(this.videoGallery, {
      startIndex: index,
      dragToClose: false,
      closeButton: true,
      Toolbar: true,
      Thumbs: true,
      infinite: true,
    });
  }
}
