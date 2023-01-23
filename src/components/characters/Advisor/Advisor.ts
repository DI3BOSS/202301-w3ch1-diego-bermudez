import { Character } from "../Character/Character";
import CharacterDataStructure from "../CharacterDataStructure/CharacterDataStructure";
import { AdvisorStructre } from "../types/types";

export class Advisor extends Character implements AdvisorStructre {
  constructor(
    characterData: CharacterDataStructure,
    public advises: Character
  ) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
