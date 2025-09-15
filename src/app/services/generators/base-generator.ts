import { Injectable, Signal, signal } from '@angular/core';
import { interval } from 'rxjs';

@Injectable()
export class BaseGenerator {
  private readonly _name = signal<string>('');
  private readonly _owned = signal<number>(0);
  private readonly _baseCost = signal<number>(0);
  private readonly _multiplier = signal<number>(1)
  private readonly _interval = signal<number>(1000);
  private readonly _autoCollectEnabled = signal<boolean>(false);

  constructor(private readonly generatorName: string,
              private readonly baseCost: number) {
    //TODO: init from save data
    this._name.set(generatorName);
    this._baseCost.set(baseCost);
  }

  enableAutoCollect(): void {
    if (!this._autoCollectEnabled()) {
      return;
    }

    const generator = interval(this.interval());
    generator.subscribe();
    //TODO: generate borgor
    //This can probably be shared beyond generators
    //Unsub/resub after changes to mutators
  }

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
}
