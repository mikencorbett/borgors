import { Injectable, signal } from '@angular/core';
import { defaultInventory } from './default-values';
import { ResourceType } from './resource/resource-type';
import { Recipe } from './resource/recipe';

@Injectable({ providedIn: 'root' })
export class Resources {
  private readonly _inventory = signal(defaultInventory);


  gainResources(type: ResourceType, amount: number, recipe: Recipe | null = null): void {
    this._inventory.update((cv) => {
      const updated: Recipe = {
        [ResourceType.Borgor]: 0,
        [ResourceType.Lebbuce]: 0,
        [ResourceType.Bonz]: 0,
        [ResourceType.Flesh]: 0,
        [ResourceType.Fan]: 0
      };

      for (const key in cv) {
        const k = key as ResourceType;
        updated[k] = cv[k] + amount * (k === type ? 1 : 0) - (recipe?.[k] ?? 0);
      }

      return updated;
    });
  }


  getResourceQuantity(type: ResourceType) {
    return this._inventory()[type];
  }

  canMakeResource(recipe: Recipe): boolean {
    let canMakeResource = true;
    Object.entries(recipe).forEach(([resource, requiredQuantity]) => {
      const rst = <ResourceType>resource;
      if (requiredQuantity > this.getResourceQuantity(rst)) {
        canMakeResource = false;
        return;
      }
    })
    return canMakeResource;
  }
}
