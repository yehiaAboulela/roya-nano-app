import { LanguageService } from './../../shared/services/language.service';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { BlogItem } from '../../shared/interface/blog-item';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(
    private BlogsService: BlogsService,
    private LanguageService: LanguageService,
    private translate: TranslateService
  ) {}
  blogs: BlogItem[] = [];
  lang: string = 'en';

  ngOnInit(): void {
    this.BlogsService.getBlogs().subscribe({
      next: (res) => {
        this.blogs = res.data.blogs;
      },
    });
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
}
