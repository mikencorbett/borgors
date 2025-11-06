import { ResourceType } from './resource-type';
import { Recipe } from './recipe';

export interface Resource {
  id: ResourceType;
  interval: number;
  recipe?: Recipe; //only necessary for borgor (for now, so optional)
}
