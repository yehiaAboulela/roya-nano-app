import { Component, HostListener } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  nav: boolean = false;
  isNavbarHidden = false;
  private lastScrollTop = 0;
  private scrollSubscription: Subscription = {} as Subscription;

  ngOnInit() {
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(throttleTime(200))
      .subscribe(() => this.onWindowScroll());
  }

  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      this.isNavbarHidden = true; // Scrolling down
    } else {
      this.isNavbarHidden = false; // Scrolling up
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
