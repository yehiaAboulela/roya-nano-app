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
      next: (data) => {
        this.blog = this.BlogsService.getBlogById(data['id']);
        console.log(this.blog);
      },
    });
  }
}
