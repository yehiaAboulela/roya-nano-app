import { isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
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

  updateMetaTagsAndTitle() {
    if (this.locale === 'en-US') {
      this.titleService.setTitle(
        'Best Car Protection in Egypt | Premium Nano Technology Car Detailing in Cairo, Alexandria, Tanta, October'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Royal Nano offers the best car protection using premium nano technology in Cairo, Alexandria, Tanta, and October. Protect your car with the best in Egypt.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'best car protection Egypt, nano technology car detailing Cairo, Alexandria, Tanta, October',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'Best Car Protection in Egypt | Premium Nano Technology Car Detailing in Cairo, Alexandria, Tanta, October',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          "Explore Royal Nano's top-notch car protection and detailing services in Egypt, including Cairo, Alexandria, Tanta, and October.",
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'Cairo, Alexandria, Tanta, October, Egypt',
      });
    } else {
      // Arabic version meta tags for Home Page
      this.titleService.setTitle(
        'أفضل حماية للسيارات في مصر | تفاصيل السيارات بتكنولوجيا النانو في القاهرة، الإسكندرية، طنطا، أكتوبر'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'تقدم رويال نانو أفضل حماية للسيارات باستخدام تكنولوجيا النانو في القاهرة، الإسكندرية، طنطا، وأكتوبر. حماية سيارتك بأفضل الخدمات في مصر.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'أفضل حماية للسيارات مصر، تكنولوجيا النانو لتفاصيل السيارات القاهرة، الإسكندرية، طنطا، أكتوبر',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'أفضل حماية للسيارات في مصر | تفاصيل السيارات بتكنولوجيا النانو في القاهرة، الإسكندرية، طنطا، أكتوبر',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'اكتشف أفضل خدمات حماية وتفاصيل السيارات في رويال نانو باستخدام تكنولوجيا النانو في مصر، بما في ذلك القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'القاهرة، الإسكندرية، طنطا، أكتوبر، مصر',
      });
    }
  }
}
