import { Component, Renderer2 } from '@angular/core';
import AOS from 'aos';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'Royal Nano Ceramic';

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
  }
}
