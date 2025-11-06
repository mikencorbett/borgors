import { Component, inject, input } from '@angular/core';
import { Recipe } from '../../services/resource/recipe';
import { Resources } from '../../services/resources';
import { ResourceType } from '../../services/resource/resource-type';

@Component({
  selector: 'app-base-generator',
  imports: [],
  templateUrl: './base-generator.html',
  styleUrl: './base-generator.scss'
})
export class BaseGenerator {
  name = input.required<ResourceType>();
  recipe = input<Recipe | null>(null);
  private readonly resources = inject(Resources);

  makeResource(): void {
    this.resources.gainResources(this.name(), 1)
  }
}
