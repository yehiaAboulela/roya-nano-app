import { Pipe, PipeTransform } from '@angular/core';
import { BlogItem } from '../interface/blog-item';

@Pipe({
  name: 'blogSearch',
  standalone: false,
})
export class BlogSearchPipe implements PipeTransform {
  transform(allBlogs: BlogItem[], searchText: string): BlogItem[] {
    if (!allBlogs || !searchText) {
      return allBlogs;
    }

    const lowerSearch = searchText.toLowerCase();

    return allBlogs.filter(
      (blog) =>
        blog.heading_en.toLowerCase().includes(lowerSearch) ||
        blog.heading_ar.toLowerCase().includes(lowerSearch)
    );
  }
}
