import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
declare var Fancybox: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  constructor(private LanguageService: LanguageService) {}

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
