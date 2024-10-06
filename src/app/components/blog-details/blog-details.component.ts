import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { BlogItem } from '../../shared/interface/blog-item';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit {
  constructor(
    private BlogsService: BlogsService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  blog: BlogItem = {} as BlogItem;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (routeData) => {
        this.BlogsService.blogs.subscribe({
          next: (data) => {
            this.blog = data.filter(
              (cur) => cur.id.toString() === routeData['id']
            )[0];
          },
        });
      },
    });
  }
}
