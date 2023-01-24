import {
  joffreyData,
  jaimeData,
  daeneryseData,
  tyrionData,
  bronnData,
} from "./components/characters/characters";
import CharacterCard from "./components/CharacterCard/CharacterCard";

const joffrey = new CharacterCard(
  joffreyData.imageSource,
  joffreyData.name,
  joffreyData.family,
  joffreyData.age
);
const jaime = new CharacterCard(
  jaimeData.imageSource,
  jaimeData.name,
  jaimeData.family,
  jaimeData.age
);

const daeneryse = new CharacterCard(
  daeneryseData.imageSource,
  daeneryseData.name,
  daeneryseData.family,
  daeneryseData.age
);

const tyrion = new CharacterCard(
  tyrionData.imageSource,
  tyrionData.name,
  tyrionData.family,
  tyrionData.age
);

const bronn = new CharacterCard(
  bronnData.imageSource,
  bronnData.name,
  bronnData.family,
  bronnData.age
);
