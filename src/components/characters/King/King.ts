import { Character } from "../Character/Character";
import CharacterDataStructure from "../CharacterDataStructure/CharacterDataStructure";
import { KingStructure } from "../types/types";

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
