import { Component, OnInit, Renderer2 } from '@angular/core';
import { LanguageService } from './../../shared/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private LanguageService: LanguageService
  ) {}
  lang: string = '';
  nav: boolean = false;
  isNavbarHidden = false;

  ngOnInit() {
    this.LanguageService.lang.subscribe({
      next: (lang) => {
        this.lang = lang;
      },
    });
  }

  changeLang(userLang: string) {
    this.LanguageService.lang.next(userLang);
    localStorage.setItem('lang', this.lang);

    this.renderer.removeClass(document.body, 'lang-en');
    this.renderer.removeClass(document.body, 'lang-ar');

    this.renderer.addClass(document.body, `lang-${userLang}`);
  }

  closeMinu() {
    if (this.nav) this.nav = false;
  }
}
