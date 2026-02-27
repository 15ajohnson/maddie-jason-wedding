import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-title',
  imports: [CommonModule, RouterLink],
  templateUrl: './header-title.html',
  styleUrl: './header-title.scss'
})
export class HeaderTitle {
  @Input() condensed = false;
}
