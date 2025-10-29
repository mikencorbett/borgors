import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-generator',
  imports: [],
  templateUrl: './base-generator.html',
  styleUrl: './base-generator.scss'
})
export class BaseGenerator {
  name = input.required<string>();
  initialCost = input.required<number>();
  multiplier = input.required<number>();
}
