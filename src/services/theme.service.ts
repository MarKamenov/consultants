import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-preference';
  private darkTheme = signal<boolean>(this.getInitialTheme());

  constructor() {
    this.applyTheme(this.darkTheme());
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  public toggleTheme() {
    this.darkTheme.update(current => !current);
    this.applyTheme(this.darkTheme());
  }

  public applyTheme(isDark: boolean) {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
  }

  public isDarkTheme() {
    return this.darkTheme;
  }
}

