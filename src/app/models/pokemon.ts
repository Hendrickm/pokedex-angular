import { Ability } from './ability';
import { Stat } from './stat';
import { Type } from './type';

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  types: Type[];
  abilities: Ability[];
  base_experience: number;
}
