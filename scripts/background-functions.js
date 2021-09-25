// render: functions for rendering items on page
// admin: general javascript functions
// test: functions for testing functionality
// stats: functions for getting pokemon stats

const stats = {
  getPokemonDetailsWithName: (name) => {
    return allPokemonDetails.filter((pokemon) => pokemon.name === name);
  },
  getMoveHP: (pokemon, move) => {
    const detailsObject = stats.getPokemonDetailsWithName(pokemon);
    const hp = detailsObject[0].moves[move];
    return hp;
  },
  getPokemonHP: (pokemon) => {
    return pokemonDetailsObject[pokemon].hp;
  },
  checkIfAlive: (pokemon) => {
    if (pokemonDetailsObject[pokemon].hp <= 0) {
      pokemonDetailsObject[pokemon].isAlive = false;
      return false;
    } else {
      return true;
    }
  },
};

const render = {
  createButton: (value) => {
    const btn = document.createElement("button");
    btn.innerHTML = value;
    return btn;
  },
  createImgWithName: (breed) => {
    for (let element of allPokemonDetails) {
      if (breed === element.name) {
        return render.createImgWithURL(element.img);
      }
    }
  },
  createImgWithURL: (urlPath) => {
    let img = document.createElement("img");
    img.src = urlPath;
    return img;
  },
  createHealthBar: () => {
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    outerDiv.classList.add("health-bar-container");
    innerDiv.classList.add("health-bar");
    outerDiv.append(innerDiv);
    return outerDiv;
  },
  addHealthBar: (parentDiv) => {
    const bar = render.createHealthBar();
    parentDiv.appendChild(bar);
  },
  narrateGame: (sender, receiver, move) => {
    let action = "";
    let effect = "";
    if (pokemonDetailsObject[receiver].hp > 0) {
      action = `${sender} used ${move}....`;
      effect = `${receiver}'s HP is now ${pokemonDetailsObject[receiver].hp}`;
    } else {
      action = `${sender} used ${move}....`;
      effect = `${receiver} is dead`;
    }
    return [action, effect];
  },
};

const admin = {
  generateRandomInteger: (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  },
  pickRandomKey: (obj) => {
    let keys = Object.keys(obj);
    let randInt = admin.generateRandomInteger(0, keys.length);
    return keys[randInt];
  },
  arrIsFull: (array) => {
    return array.length < 3 ? false : true;
  },
};

const test = {
  announceCurrentPokemon: () => {
    if (currentPlayer != "") {
      console.log(
        `Player is using ${currentPlayer}, Opponent is using ${currentOpponent}`
      );
    } else {
      console.log("player not specified");
    }
  },
};