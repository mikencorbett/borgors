import { Component, inject } from '@angular/core';
import {Resources} from './services/resources';
import {Generator} from './components/generator/generator';

@Component({
  selector: 'app-root',
  imports: [
    Generator
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly resources = inject(Resources);

  makeBorgor(): void {
    this.resources.gainBorgor(1);
  }
}
