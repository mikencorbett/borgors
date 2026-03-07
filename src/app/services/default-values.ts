import { ResourceType } from './resource/resource-type';
import { Resource } from './resource/resource';

export const defaultInventory = {
  [ResourceType.Borgor]: 0,
  [ResourceType.Lebbuce]: 0,
  [ResourceType.Bonz]: 0,
  [ResourceType.Flesh]: 0,
  [ResourceType.Fan]: 0
}

export const resourceList: Resource[] = [
  {
    id: ResourceType.Lebbuce,
    interval: 1000
  },
  {
    id: ResourceType.Bonz,
    interval: 1000
  },
  {
    id: ResourceType.Flesh,
    interval: 1000
  },
  {
    id: ResourceType.Borgor,
    interval: 1000,
    recipe: {
      [ResourceType.Lebbuce]: 1,
      [ResourceType.Bonz]: 2,
      [ResourceType.Flesh]: 1,
      //Need to exclude this somehow. or not?
      [ResourceType.Borgor]: 0,
      [ResourceType.Fan]: 0
    }
  },
  {
    id: ResourceType.Fan,
    interval: 1000,
    recipe: {
      [ResourceType.Lebbuce]: 0,
      [ResourceType.Bonz]: 0,
      [ResourceType.Flesh]: 0,
      [ResourceType.Borgor]: 1,
      [ResourceType.Fan]: 0
    }
  }
]
