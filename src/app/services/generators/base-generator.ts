import { computed, inject, Signal, signal } from '@angular/core';
import { interval } from 'rxjs';
import { Resources } from '../resources';

export class BaseGenerator {
  //TODO: These are probably inputs inside a component.
  private readonly _name = signal<string>('');
  private readonly _owned = signal<number>(0);
  //TODO: Need an initial cost for each generator. keeping 1 for now for testing purposes
  private readonly _initialCost = signal<number>(1);
  private readonly _multiplier = signal<number>(1.15)
  private readonly _interval = signal<number>(1000);
  private readonly _autoCollectEnabled = signal<boolean>(false);

  private readonly _cost = computed(() => {
    return (this._initialCost() + this._owned()) * this._multiplier();
  });

  private readonly resources = inject(Resources);

  enableAutoCollect(): void {
    if (!this._autoCollectEnabled()) {
      return;
    }

    const generator = interval(this.interval());
    //TODO: take until mutators change, then resub
    generator.subscribe(_ => this.resources.gainBorgor((1 + this.owned()) * this.multiplier()));
  }

  //TODO: Do i even need these getters and setters? Wtf am i doing?
  get interval(): Signal<number> {
    return this._interval.asReadonly();
  }

  get name(): Signal<string> {
    return this._name.asReadonly();
  }

  get owned(): Signal<number> {
    return this._owned.asReadonly();
  }

  set owned(quantity: number) {
    this._owned.set(quantity);
  }

  get multiplier(): Signal<number> {
    return this._multiplier.asReadonly();
  }

  set multiplier(quantity: number) {
    this._multiplier.set(quantity);
  }

  set autoCollectEnabled(value: boolean) {
    this._autoCollectEnabled.set(value);
  }

}
