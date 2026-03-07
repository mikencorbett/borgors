import { Component, computed, inject, input, Signal, signal } from '@angular/core';
import { Resources } from '../../services/resources';
import { interval } from 'rxjs';
import { BaseGenerator } from '../base-generator/base-generator';
import { AutoGeneratorConfig } from '@components/auto-generator/config';

@Component({
  selector: 'app-auto-generator',
  imports: [],
  templateUrl: './auto-generator.html',
  styleUrl: './auto-generator.scss'
})
export class AutoGenerator extends BaseGenerator {
  config = input.required<AutoGeneratorConfig>();
  generateInterval = input.required<number>();
  multiplier = input.required<number>();
  //TODO: These are probably inputs inside a component.

  enableAutoCollect(): void {
    // if (this._autoCollectEnabled()) {
    //   return;
    // }
    // this._autoCollectEnabled.set(true);
    // const generator = interval(this.generateInterval());
    // //TODO: take until mutators change, then resub?
    // generator.subscribe(_ => {
    //   this.resources.gainResources((1 + this.owned()) * this.multiplier())
    // });
  }

  //TODO: eventually purchase x amount
  // buyGenerator(): void {
  //   this.owned = 1;
  //   //TODO: this is bad and wrong. make it better.
  //   // it should only call a method if it isnt already active
  //   this.enableAutoCollect();
  // }

  // get owned(): Signal<number> {
  //   return this._owned.asReadonly();
  // }
  //
  // set owned(quantity: number) {
  //   this._owned.update(q => q + quantity);
  // }

  private readonly _cost = computed(() => {
    // return (this.initialCost() + this.owned()) * this.multiplier();
  });

  //TODO: when fan is available allow assigning and generation of resource
  assignFan(): void {

  }
  // get cost(): Signal<number> {
  //   return this._cost;
  // }
}
