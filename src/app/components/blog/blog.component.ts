import { LanguageService } from './../../shared/services/language.service';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { BlogItem } from '../../shared/interface/blog-item';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(
    private BlogsService: BlogsService,
    private LanguageService: LanguageService
  ) {}
  blogs: BlogItem[] = [];
  lang: string = 'en';

  ngOnInit(): void {
    this.BlogsService.blogs.subscribe({
      next: (data) => {
        this.blogs = data;
        console.log(data);
        this.LanguageService.lang.subscribe({
          next: (data2) => {
            this.lang = data2;
          },
        });
      },
    });
  }
}
