import CharacterDataStructure from "../CharacterDataStructure/CharacterDataStructure";

interface CharacterStructure {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}

export default CharacterStructure;
