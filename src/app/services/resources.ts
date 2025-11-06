import { Injectable, signal } from '@angular/core';
import { defaultInventory } from './default-values';
import { ResourceType } from './resource/resource-type';

@Injectable({ providedIn: 'root' })
export class Resources {
  private readonly _inventory = signal(defaultInventory);

  gainResources(type: ResourceType, amount: number): void {
    this._inventory.update(cv => ({
      [type]: amount,
      ...cv
    }))
  }

  getResourceQuantity(type: ResourceType) {
    return this._inventory()[type];
  }
}
