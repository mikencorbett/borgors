import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Resources } from '@services/resources';
import { ResourceType } from '@services/resource/resource-type';
import { BaseGenerator } from '@components/base-generator/base-generator';
import { resourceList } from '@services/default-values';

@Component({
  selector: 'app-main',
  imports: [BaseGenerator],
  templateUrl: './main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main.scss',
})
export class Main {
  readonly resourceList = resourceList;
  protected readonly resources = inject(Resources);

  makeResource(type: ResourceType, amount: number): void {
    this.resources.gainResources(type, amount);
  }
}
