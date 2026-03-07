import { ResourceType } from '@services/resource/resource-type';

export interface AutoGeneratorConfig {
  name: string;
  owned: number;
  isActive: boolean;
  generationInterval: number;
  resourceGenerated: ResourceType;
}
