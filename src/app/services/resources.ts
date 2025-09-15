import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Resources {
  private readonly _borgors = signal(0);

  gainBorgor(amount: number) {
    this._borgors.update(c => c + amount);
  }

  get borgors() {
    return this._borgors.asReadonly();
  }
}
