import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderTitle } from '../header-title/header-title';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, HeaderTitle, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() condensed = false;

  navItems = [
    { label: 'Home', link: '/', fragment: undefined },
    { label: 'Our Story', link: '/', fragment: 'our-story' },
    { label: 'Gallery', link: '/gallery', fragment: undefined },
    { label: 'RSVP', link: '/rsvp', fragment: undefined },
    { label: 'Travel', link: '/travel', fragment: undefined },
    { label: 'Registry', link: '/registry', fragment: undefined },
    { label: 'What to Know', link: '/faq', fragment: undefined }
  ];
}
