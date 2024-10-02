import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-comparison-slider',
  templateUrl: './comparison-slider.component.html',
  styleUrl: './comparison-slider.component.css',
})
export class ComparisonSliderComponent {
  constructor(private LanguageService: LanguageService) {}
  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
}
