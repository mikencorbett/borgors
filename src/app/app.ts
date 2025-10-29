import { Component, inject } from '@angular/core';
import {Resources} from './services/resources';
import {AutoGenerator} from './components/auto-generator/auto-generator';

@Component({
  selector: 'app-root',
  imports: [
    AutoGenerator
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
