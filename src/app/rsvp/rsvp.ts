import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-rsvp',
  imports: [CommonModule, Header],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.scss'
})
export class Rsvp implements OnInit, OnDestroy {
  navItems = [
    { label: 'Home', link: '/', fragment: undefined },
    { label: 'Our Story', link: '/#our-story', fragment: 'our-story' },
    { label: 'Gallery', link: '/gallery', fragment: undefined },
    { label: 'RSVP', link: '/rsvp', fragment: undefined },
    { label: 'Travel', link: '/travel', fragment: undefined },
    { label: 'Registry', link: '/registry', fragment: undefined },
    { label: 'What to Know', link: '/faq', fragment: undefined }
  ];
  ngOnInit() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('rsvp-page');
  }

  ngOnDestroy() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.classList.remove('rsvp-page');
  }
}
