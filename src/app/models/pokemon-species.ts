import { FlavorText } from './flavor-text';
import { Genera } from './genera';

export interface PokemonSpecies {
  id: number;
  flavor_text_entries: FlavorText[];
  genera: Genera[];
}
