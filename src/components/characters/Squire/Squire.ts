import { Character } from "../Character/Character";
import CharacterDataStructure from "../CharacterDataStructure/CharacterDataStructure";
import { Fighter } from "../Fighter/Figher";
import { SquireStructure } from "../types/types";

export class Squire extends Character implements SquireStructure {
  constructor(
    characterData: CharacterDataStructure,
    public kissAssLevel: number,
    public serves: Fighter
  ) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  private kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
