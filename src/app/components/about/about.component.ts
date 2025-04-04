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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: false,
})
export class AboutComponent implements OnInit {
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
        'About Royal Nano | Best Car Protection in Egypt - Nano Technology in Cairo, Alexandria, Tanta, October'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Learn about Royal Nano, the leading provider of car protection and detailing services using cutting-edge nano technology in Egypt. Locations in Cairo, Alexandria, Tanta, and October.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'about Royal Nano, best car protection Egypt, nano technology car detailing Cairo, Alexandria, Tanta, October',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'About Royal Nano | Best Car Protection in Egypt - Nano Technology in Cairo, Alexandria, Tanta, October',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'Royal Nano provides the best car protection services using premium nano technology. Learn about our services and locations in Cairo, Alexandria, Tanta, and October.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'Cairo, Alexandria, Tanta, October, Egypt',
      });
    } else {
      // Arabic version meta tags for About Page
      this.titleService.setTitle(
        'حول رويال نانو | أفضل حماية للسيارات في مصر - تكنولوجيا النانو في القاهرة، الإسكندرية، طنطا، أكتوبر'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'تعرف على رويال نانو، أفضل مزود لحماية وتفاصيل السيارات باستخدام تكنولوجيا النانو المتطورة في مصر. لدينا فروع في القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'حول رويال نانو, أفضل حماية للسيارات مصر, تكنولوجيا النانو لتفاصيل السيارات القاهرة، الإسكندرية، طنطا، أكتوبر',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'حول رويال نانو | أفضل حماية للسيارات في مصر - تكنولوجيا النانو في القاهرة، الإسكندرية، طنطا، أكتوبر',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'تقدم رويال نانو أفضل خدمات حماية وتفاصيل السيارات باستخدام تكنولوجيا النانو المتطورة. تعرف على خدماتنا وفروعنا في القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'القاهرة، الإسكندرية، طنطا، أكتوبر، مصر',
      });
    }
  }
}
