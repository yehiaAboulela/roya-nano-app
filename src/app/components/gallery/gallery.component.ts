import { isPlatformServer } from '@angular/common';
import { Component, Inject, LOCALE_ID, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  standalone: false,
})
export class GalleryComponent {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  images: boolean = false;

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.updateMetaTagsAndTitle();
    }
  }

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
    margin: 10,
    items: 4,
    responsive: {
      0: {
        items: 2,
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

  updateMetaTagsAndTitle() {
    if (this.locale === 'en-US') {
      this.titleService.setTitle(
        'Royal Nano Car Protection Gallery - Best Car Protection in Cairo, Alexandria, Tanta, October'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Explore our gallery showcasing Royal Nano’s top-notch car protection services. Check out before and after pictures and videos of our expert car detailing in Cairo, Alexandria, Tanta, and October, Egypt.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'Royal Nano car protection gallery, best car protection in Egypt, car detailing Cairo, Alexandria, Tanta, October, nano protection Egypt, car protection services',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'Royal Nano Car Protection Gallery - Best Car Protection in Cairo, Alexandria, Tanta, October',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'View the Royal Nano gallery for before and after images and videos showcasing the best car protection services in Cairo, Alexandria, Tanta, and October.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'Cairo, Alexandria, Tanta, October, Egypt',
      });
    } else {
      // Arabic version meta tags for Gallery Page
      this.titleService.setTitle(
        'معرض رويال نانو لحماية السيارات - أفضل حماية للسيارات في القاهرة، الإسكندرية، طنطا، أكتوبر'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'اكتشف معرض رويال نانو لحماية السيارات الذي يعرض خدمات حماية السيارات المتميزة. شاهد صور وفيديوهات قبل وبعد لتفاصيل السيارات في القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'معرض رويال نانو لحماية السيارات, أفضل حماية للسيارات في مصر, تفصيل السيارات القاهرة, الإسكندرية, طنطا, أكتوبر, حماية السيارات بتقنية النانو',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'معرض رويال نانو لحماية السيارات - أفضل حماية للسيارات في القاهرة، الإسكندرية، طنطا، أكتوبر',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'شاهد معرض رويال نانو الذي يعرض صور وفيديوهات قبل وبعد تظهر أفضل خدمات حماية السيارات في القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'القاهرة، الإسكندرية، طنطا، أكتوبر، مصر',
      });
    }
  }
}
