import { Component, inject } from '@angular/core';
import {Resources} from './services/resources';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly resources = inject(Resources);

  makeBorgor(): void {
    this.resources.gainBorgor(1);
  }
}
