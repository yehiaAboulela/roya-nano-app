import { isPlatformServer } from '@angular/common';
import { Component, Inject, LOCALE_ID, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: false,
})
export class ContactComponent {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.updateMetaTagsAndTitle();
    }
  }
  locations: any = {
    tanta:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109672.62752137944!2d30.849149149498917!3d30.79507270000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7cbd78ec9ec8f%3A0x40da8ba71a77b0e5!2sRoyal%20Nano%20ceramic!5e0!3m2!1sen!2seg!4v1727532189684!5m2!1sen!2seg',
    october:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110616.52923514498!2d30.762201897265626!3d29.957393200000013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857a2f9920b5b%3A0x3cc48556389a36b5!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532697166!5m2!1sen!2seg',
    madenetNasr:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110511.95243190305!2d31.20043229726563!3d30.051241899999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f3288fadc27%3A0x41d2aa0b7dabcc90!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532870930!5m2!1sen!2seg',
    zayed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110499.32048832063!2d30.80570569726563!3d30.06256000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585918ec520d49%3A0xcb17906b46280270!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532911778!5m2!1sen!2seg',
    madenetNasr2:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110497.91049591218!2d31.183459397265615!3d30.06382310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fe5876e425d%3A0xc5958821be62161!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532953061!5m2!1sen!2seg',
  };
  curLocation: string =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110616.52923514498!2d30.762201897265626!3d29.957393200000013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857a2f9920b5b%3A0x3cc48556389a36b5!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532697166!5m2!1sen!2seg';

  changeLocation(src: string) {
    this.curLocation = this.locations[src];
  }

  updateMetaTagsAndTitle() {
    if (this.locale === 'en-US') {
      // English version meta tags for Contact Us Page
      this.titleService.setTitle(
        'Contact Royal Nano - Best Car Protection in Egypt | Cairo, Alexandria, Tanta, October'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Contact Royal Nano today for the best car protection services in Egypt. Locations in Cairo, Alexandria, Tanta, and October. Expert car detailing and nano protection services.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'Contact Royal Nano, best car protection Egypt, car detailing Cairo, Alexandria, Tanta, October, nano protection Egypt',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'Contact Royal Nano - Best Car Protection in Egypt | Cairo, Alexandria, Tanta, October',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'Get in touch with Royal Nano for top-tier car protection services in Cairo, Alexandria, Tanta, and October. Nano technology car detailing at its best in Egypt.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'Cairo, Alexandria, Tanta, October, Egypt',
      });
    } else {
      // Arabic version meta tags for Contact Us Page
      this.titleService.setTitle(
        'اتصل برويال نانو - أفضل حماية للسيارات في مصر | القاهرة، الإسكندرية، طنطا، أكتوبر'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'اتصل برويال نانو اليوم للحصول على أفضل خدمات حماية السيارات في مصر. لدينا فروع في القاهرة، الإسكندرية، طنطا، وأكتوبر. خدمات حماية السيارات بتقنية النانو.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'اتصل برويال نانو, أفضل حماية للسيارات في مصر, تفصيل السيارات القاهرة, الإسكندرية, طنطا, أكتوبر, حماية السيارات بتقنية النانو',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'اتصل برويال نانو - أفضل حماية للسيارات في مصر | القاهرة، الإسكندرية، طنطا، أكتوبر',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'اتصل برويال نانو للحصول على خدمات حماية السيارات في القاهرة، الإسكندرية، طنطا، وأكتوبر باستخدام تقنية النانو المتطورة.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'القاهرة، الإسكندرية، طنطا، أكتوبر، مصر',
      });
    }
  }
}
