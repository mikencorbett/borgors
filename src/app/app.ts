import { Component, inject } from '@angular/core';
import { Resources } from './services/resources';
import { BaseGenerator } from './components/base-generator/base-generator';
import { ResourceType } from './services/resource/resource-type';
import { resourceList } from './services/default-values';

@Component({
  selector: 'app-root',
  imports: [
    BaseGenerator
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly resources = inject(Resources);
  readonly resourceList = resourceList;
  makeResource(type: ResourceType, amount: number): void {
    this.resources.gainResources(type, amount);
  }
}
