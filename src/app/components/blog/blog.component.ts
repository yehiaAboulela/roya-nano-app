import { LanguageService } from './../../shared/services/language.service';
import {
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { BlogItem } from '../../shared/interface/blog-item';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  standalone: false,
})
export class BlogComponent implements OnInit {
  constructor(
    private BlogsService: BlogsService,
    @Inject(LOCALE_ID) public locale: string,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  blogs: BlogItem[] = [];

  ngOnInit(): void {
    this.BlogsService.getBlogs().subscribe({
      next: (res) => {
        this.blogs = res.data.blogs;
      },
    });
    if (isPlatformServer(this.platformId)) {
      this.updateMetaTagsAndTitle();
    }
  }

  updateMetaTagsAndTitle() {
    if (this.locale === 'en-US') {
      // English version meta tags for Blog Page
      this.titleService.setTitle(
        'Royal Nano Blog | Best Car Protection in Egypt - Tips, News, and More'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'Read Royal Nano’s blog for the latest car protection tips, news, and updates on nano technology in Egypt. Locations in Cairo, Alexandria, Tanta, and October.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'Royal Nano blog, car protection tips, nano technology Egypt, car detailing Cairo, Alexandria, Tanta, October, best car protection Egypt',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'Royal Nano Blog | Best Car Protection in Egypt - Tips, News, and More',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'Stay updated with the latest news, tips, and information on car protection and nano technology in Egypt. Locations in Cairo, Alexandria, Tanta, and October.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'Cairo, Alexandria, Tanta, October, Egypt',
      });
    } else {
      // Arabic version meta tags for Blog Page
      this.titleService.setTitle(
        'مدونة رويال نانو | أفضل حماية للسيارات في مصر - نصائح وأخبار والمزيد'
      );

      this.metaService.updateTag({
        name: 'description',
        content:
          'اقرأ مدونة رويال نانو للحصول على أحدث النصائح والأخبار حول حماية السيارات وتكنولوجيا النانو في مصر. لدينا فروع في القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        name: 'keywords',
        content:
          'مدونة رويال نانو, نصائح حماية السيارات, تكنولوجيا النانو في مصر, تفصيل السيارات القاهرة، الإسكندرية، طنطا، أكتوبر, أفضل حماية للسيارات مصر',
      });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      this.metaService.updateTag({
        property: 'og:title',
        content:
          'مدونة رويال نانو | أفضل حماية للسيارات في مصر - نصائح وأخبار والمزيد',
      });
      this.metaService.updateTag({
        property: 'og:description',
        content:
          'ابق على اطلاع بأحدث الأخبار والنصائح والمعلومات حول حماية السيارات وتكنولوجيا النانو في مصر. لدينا فروع في القاهرة، الإسكندرية، طنطا، وأكتوبر.',
      });
      this.metaService.updateTag({
        property: 'og:location',
        content: 'القاهرة، الإسكندرية، طنطا، أكتوبر، مصر',
      });
    }
  }
}
