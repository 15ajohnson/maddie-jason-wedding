import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Faq } from './faq/faq';
import { Gallery } from './gallery/gallery';
import { Travel } from './travel/travel';
import { Registry } from './registry/registry';
import { Rsvp } from './rsvp/rsvp';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'faq', component: Faq },
  { path: 'gallery', component: Gallery },
  { path: 'travel', component: Travel },
  { path: 'registry', component: Registry },
  { path: 'rsvp', component: Rsvp },
  { path: '**', redirectTo: '' }
];
