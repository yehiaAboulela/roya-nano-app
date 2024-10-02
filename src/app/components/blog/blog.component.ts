import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { BlogItem } from '../../shared/interface/blog-item';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  constructor(private BlogsService: BlogsService) {}
  blogs: BlogItem[] = this.BlogsService.blogs;
}
