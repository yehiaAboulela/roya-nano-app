import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false,
})
export class NavbarComponent implements OnInit {
  nav: boolean = false;
  constructor(
    private router: Router,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  ngOnInit() {
    console.log(this.router.url);
  }

  changeLang() {
    const currentUrl = window.location.pathname;
    const newLocale = this.locale === 'ar' ? 'en-US' : 'ar';

    // Ensure the correct language folder is used
    const updatedUrl = currentUrl.replace(/^\/(ar|en-US)/, `/${newLocale}`);

    // Redirect to the correct language version
    window.location.href = window.location.origin + updatedUrl;
  }

  closeMinu() {
    if (this.nav) this.nav = false;
  }
}
