import { LanguageService } from './../../shared/services/language.service';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { BlogItem } from '../../shared/interface/blog-item';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
  standalone: false,
})
export class BlogDetailsComponent implements OnInit {
  constructor(
    private BlogsService: BlogsService,
    private ActivatedRoute: ActivatedRoute,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  blog: BlogItem = {} as BlogItem;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (id) => {
        this.BlogsService.getBlogById(id['id']).subscribe({
          next: (res) => {
            this.blog = res.data.blog;
          },
        });
      },
    });
  }
}
