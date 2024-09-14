import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerContent1: any[] = [
    { text: 'Header 1', numbers: 101, color: '#fae52c' },
    { text: 'Header 2', numbers: 102, color: '#ff9a9a' },
    { text: 'Header 3', numbers: 103, color: '#ff3a9a' },
    { text: 'Header 4', numbers: 104, color: '#54daf9' },
  ];

  headerContent2: any[] = [
    { text: 'Content D', numbers: 204, color: '#54daf9' },
    { text: 'Content B', numbers: 202, color: '#ff9a9a' },
    { text: 'Content A', numbers: 201, color: '#fae52c' },
    { text: 'Content C', numbers: 203, color: '#ff3a9a' },
  ];
}
