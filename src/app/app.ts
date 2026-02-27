import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Header } from './shared/header/header';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maddie-jason-wedding');
  isHome = true;

  constructor(private router: Router, private scroller: ViewportScroller) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.isHome = e.urlAfterRedirects.split('#')[0] === '/';
      const fragment = e.urlAfterRedirects.split('#')[1];
      if (fragment) {
        setTimeout(() => this.scroller.scrollToAnchor(fragment), 0);
      }
    });
  }
}
