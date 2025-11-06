import { ResourceType } from './resource-type';

export type Recipe = {
  [id in ResourceType]: number;
};
