import CharacterCardStructure from "../CharacterCardStructure/CharacterCardStructure";

class CharacterCard implements CharacterCardStructure {
  container: Element;

  constructor(imageSource: string, name: string, family: string, age: number) {
    this.container = document.createElement("li");
    document.querySelector(".characters-list")?.appendChild(this.container);
    this.container.innerHTML = ` <div class="card character__card">
          <img src="${imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${name} ${family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age:${age} yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: X</li>
                <li>Weapon: XXX</li>
                <li>Dexterity: X</li>
                <li>Kiss Ass level: X</li>
                <li>Advises to: X</li>
                <li>Serves to: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>`;

    this.container.classList.add("character");
    this.container.classList.add("col");
  }

  speak() {}
  die() {}
}

export default CharacterCard;
