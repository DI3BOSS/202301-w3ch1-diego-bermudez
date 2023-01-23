import CharacterDataStructure from "../CharacterDataStructure/CharacterDataStructure";
import CharacterStructure from "../CharacterStructure/CharacterStructure";

export class Character implements CharacterStructure {
  public isAlive = true;
  public series = "Game of Thrones";

  constructor(public characterData: CharacterDataStructure) {}

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}
