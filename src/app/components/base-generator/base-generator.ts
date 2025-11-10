import { Component, computed, inject, input } from '@angular/core';
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
  recipe = input<Recipe | undefined>(undefined);
  private readonly resources = inject(Resources);
  readonly owned = computed(() => {
    return this.resources.getResourceQuantity(this.name())
  })

  canMakeResource = computed(() => {
    const recipe = this.recipe();
    if (!recipe) {
      return true;
    }
    return this.resources.canMakeResource(recipe);
  })

  makeResource(): void {
    this.resources.gainResources(this.name(), 1, this.recipe());
  }

  //TODO: check to make sure resources are available
  // canMakeResource(): boolean {
  //   const recipe = this.recipe();
  //   if (!recipe) {
  //     return true;
  //   } else {
  //     return this.resources.canMakeResource(recipe);
  //   }
  // }
}
