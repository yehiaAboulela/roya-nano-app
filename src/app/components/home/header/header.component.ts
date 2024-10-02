import { LanguageService } from './../../../shared/services/language.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  lang: string = 'en';
  headerContent1: any[] = [];
  headerContent2: any[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
        this.updateHeaderContent();
      },
    });
  }

  updateHeaderContent() {
    if (this.lang === 'ar') {
      this.headerContent1 = [
        { text: 'العنوان 1', numbers: 101, color: '#fae52c' },
        { text: 'العنوان 2', numbers: 102, color: '#ff9a9a' },
        { text: 'العنوان 3', numbers: 103, color: '#ff3a9a' },
        { text: 'العنوان 4', numbers: 104, color: '#54daf9' },
        { text: 'العنوان 1', numbers: 101, color: '#fae52c' },
        { text: 'العنوان 2', numbers: 102, color: '#ff9a9a' },
        { text: 'العنوان 3', numbers: 103, color: '#ff3a9a' },
        { text: 'العنوان 4', numbers: 104, color: '#54daf9' },
      ];

      this.headerContent2 = [
        { text: 'المحتوى د', numbers: 204, color: '#54daf9' },
        { text: 'المحتوى ب', numbers: 202, color: '#ff9a9a' },
        { text: 'المحتوى أ', numbers: 201, color: '#fae52c' },
        { text: 'المحتوى ج', numbers: 203, color: '#ff3a9a' },
        { text: 'المحتوى د', numbers: 204, color: '#54daf9' },
        { text: 'المحتوى ب', numbers: 202, color: '#ff9a9a' },
        { text: 'المحتوى أ', numbers: 201, color: '#fae52c' },
        { text: 'المحتوى ج', numbers: 203, color: '#ff3a9a' },
      ];
    } else {
      this.headerContent1 = [
        { text: 'Header 1', numbers: 101, color: '#fae52c' },
        { text: 'Header 2', numbers: 102, color: '#ff9a9a' },
        { text: 'Header 3', numbers: 103, color: '#ff3a9a' },
        { text: 'Header 4', numbers: 104, color: '#54daf9' },
        { text: 'Header 1', numbers: 101, color: '#fae52c' },
        { text: 'Header 2', numbers: 102, color: '#ff9a9a' },
        { text: 'Header 3', numbers: 103, color: '#ff3a9a' },
        { text: 'Header 4', numbers: 104, color: '#54daf9' },
      ];

      this.headerContent2 = [
        { text: 'Content D', numbers: 204, color: '#54daf9' },
        { text: 'Content B', numbers: 202, color: '#ff9a9a' },
        { text: 'Content A', numbers: 201, color: '#fae52c' },
        { text: 'Content C', numbers: 203, color: '#ff3a9a' },
        { text: 'Content D', numbers: 204, color: '#54daf9' },
        { text: 'Content B', numbers: 202, color: '#ff9a9a' },
        { text: 'Content A', numbers: 201, color: '#fae52c' },
        { text: 'Content C', numbers: 203, color: '#ff3a9a' },
      ];
    }
  }
}
