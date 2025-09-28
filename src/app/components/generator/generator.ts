import {Component, computed, inject, input, Signal, signal} from '@angular/core';
import {Resources} from '../../services/resources';
import { interval } from 'rxjs';

@Component({
  selector: 'app-generator',
  imports: [],
  templateUrl: './generator.html',
  styleUrl: './generator.scss'
})
export class Generator {
  name = input.required<string>();
  initialCost = input.required<number>();
  generateInterval = input.required<number>();
  multiplier = input.required<number>();
  //TODO: These are probably inputs inside a component.
  private readonly _owned = signal<number>(0);
  private readonly _autoCollectEnabled = signal<boolean>(false);
  private readonly resources = inject(Resources);

  enableAutoCollect(): void {
    if (this._autoCollectEnabled()) {
      return;
    }
    this._autoCollectEnabled.set(true);
    const generator = interval(this.generateInterval());
    //TODO: take until mutators change, then resub?
    generator.subscribe(_ => {
      this.resources.gainBorgor((1 + this.owned()) * this.multiplier())
    });
  }

  get owned(): Signal<number> {
    return this._owned.asReadonly();
  }

  set owned(quantity: number) {
    this._owned.update(q => q + quantity);
  }

  private readonly _cost = computed(() => {
    return (this.initialCost() + this.owned()) * this.multiplier();
  });

  get cost(): Signal<number> {
    return this._cost;
  }

  //TODO: eventually purchase x amount
  buyGenerator(): void {
    this.owned = 1;
    //TODO: this is bad and wrong. make it better.
    // it should only call a method if it isnt already active
    this.enableAutoCollect();
  }
}
