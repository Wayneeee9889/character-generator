function createChar(charImie, charRola){
    return{
        name: charName,
        role: charRole

    }
    // this.name = charImie;
    // this.role = charRola;
    // this.przedmiot = { weapon: null, armor: null, items: [] };
    // this.umietnosc = [];
    // this.level = 1;
};

function addItem(character, item){
      character.items = item;
}
function learnSkill(character, skill){
      character.skills = skill;
}
function levelUp(character, level){
      character.levelUp = level;
}

function characterDescription(character){
        const kaszka = document.getElementById("kaszka");
        const imie1 = document.createElement("h3");
        const rola1 = document.createElement("h3");
        const przedmiot1 = document.createElement("h3");
        const umietnosc1 = document.createElement("h3");
        const level1 = document.createElement("h3");

        kaszka.appendChild(imie1);
        kaszka.appendChild(rola1);
        kaszka.appendChild(przedmiot1);
        kaszka.appendChild(umietnosc1);
        kaszka.appendChild(level1);

        imie1.innerText = "Imie: " + character.name;
        rola1.innerText = "Rola: " + character.role;
        przedmiot1.innerText = "Przedmioty: " + character.przedmiot;
        umietnosc1.innerText = "Umiętnośći: " + character.umietnosc;
        level1.innerText = "level: " + character.level;
}

function generateChar(){
        const imie = document.getElementById("name").value;
        const rola = document.getElementById("rola").value;
        const przedmiot = document.getElementById("przedmiot").value;
        const umietnosc = document.getElementById("umetnosci").value;
        const level = document.getElementById("leel").value;

        const character1 = new createChar(imie, rola);

        addItem(character1, przedmiot);
        learnSkill(character1, umietnosc);
        levelUp(character1, level);
        characterDescription(character1);
}
