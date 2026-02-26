import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme-mode';
  private readonly darkModeClass = 'p-dark';
  
  // Signal để quản lý theme mode
  readonly themeMode = signal<ThemeMode>(
    (typeof localStorage !== 'undefined' 
      ? (localStorage.getItem(this.THEME_KEY) as ThemeMode) 
      : null) || 'light'
  );

  constructor() {
    // Áp dụng theme khi khởi động
    this.applyTheme(this.themeMode());

    // Effect để tự động cập nhật khi theme mode thay đổi
    effect(() => {
      const mode = this.themeMode();
      this.applyTheme(mode);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.THEME_KEY, mode);
      }
    });
  }

  /**
   * Chuyển đổi giữa light và dark mode
   */
  toggleTheme(): void {
    const newMode: ThemeMode = this.themeMode() === 'light' ? 'dark' : 'light';
    this.themeMode.set(newMode);
  }

  /**
   * Set theme mode cụ thể
   */
  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
  }

  /**
   * Áp dụng theme vào document
   */
  private applyTheme(mode: ThemeMode): void {
    if (typeof document === 'undefined') return;
    
    const htmlElement = document.documentElement;
    
    if (mode === 'dark') {
      htmlElement.classList.add(this.darkModeClass);
    } else {
      htmlElement.classList.remove(this.darkModeClass);
    }
  }

  /**
   * Kiểm tra xem đang ở dark mode hay không
   */
  isDarkMode(): boolean {
    return this.themeMode() === 'dark';
  }
}
