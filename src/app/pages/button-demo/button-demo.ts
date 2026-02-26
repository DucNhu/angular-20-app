import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-demo',
  imports: [CommonModule, ButtonModule],
  templateUrl: './button-demo.html',
  styleUrl: './button-demo.css',
})
export class ButtonDemo {
  loading = false;

  handleClick() {
    console.log('Button clicked!');
  }

  toggleLoading() {
    this.loading = !this.loading;
  }
}
