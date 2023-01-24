import { Advisor } from "./Advisor/Advisor";
import { Fighter } from "./Fighter/Figher";
import { King } from "./King/King";
import { Squire } from "./Squire/Squire";
import { CharacterDataStructure } from "./types/types";

export const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "./img/joffrey.jpg",
};

export const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "./img/jaime.jpg",
};

export const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "./img/daenerys.jpg",
};

export const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "./img/tyrion.jpg",
};

export const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "./img/bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);
export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
