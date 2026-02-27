import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  isPast = false;

  private interval: ReturnType<typeof setInterval> | null = null;
  // May 22 2026, 5:30 PM Eastern Daylight Time (UTC-4)
  private readonly ceremonyDate = new Date('2026-05-22T17:30:00-04:00');

  ngOnInit() {
    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  private updateCountdown() {
    const diff = this.ceremonyDate.getTime() - Date.now();
    if (diff <= 0) {
      this.isPast = true;
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }
    this.days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }
}
