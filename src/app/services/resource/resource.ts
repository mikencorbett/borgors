import { ResourceType } from './resource-type';

export interface Resource {
  id: ResourceType;
  quantityOwned: number;
  dependentResources: Resource[];
  canPurchase(resources: Resource[]): boolean;
}
