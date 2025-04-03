import { LanguageService } from './../../shared/services/language.service';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { BlogItem } from '../../shared/interface/blog-item';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  standalone: false,
})
export class BlogComponent implements OnInit {
  constructor(
    private BlogsService: BlogsService,
    @Inject(LOCALE_ID) public locale: string
  ) {}
  blogs: BlogItem[] = [];

  ngOnInit(): void {
    this.BlogsService.getBlogs().subscribe({
      next: (res) => {
        this.blogs = res.data.blogs;
      },
    });
  }
}
