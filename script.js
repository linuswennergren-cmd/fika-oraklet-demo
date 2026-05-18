const prophecies = [
  {
    title: "Kanelbulle Deluxe",
    description: "Du behover trygg energi, lagom dramatik och nagot som kanns som att arbetsdagen fortfarande gar att vinna.",
    energy: "8/10",
    chaos: "2/10",
    weather: "Mjuk molnighet"
  },
  {
    title: "Mazarin Med Huvudfart",
    description: "Oraklet ser intensiva tabbar, ovantade ideer och exakt tillrackligt med mandelmassa for att styra upp allt.",
    energy: "9/10",
    chaos: "7/10",
    weather: "Vind av ambition"
  },
  {
    title: "Dammsugare Av Oklara Skal",
    description: "Inte for att det ar logiskt, utan for att universum tydligen vill ha lite mer gron marsipan i ditt liv idag.",
    energy: "6/10",
    chaos: "9/10",
    weather: "Kosmisk forvirring"
  },
  {
    title: "Chokladboll Och En Plan",
    description: "Perfekt nar du vill kanna dig avslappnad samtidigt som du later som att du har full kontroll pa allt.",
    energy: "7/10",
    chaos: "4/10",
    weather: "Stabil med chans till fokus"
  },
  {
    title: "Wienerbrod Med Premium-Aura",
    description: "Lite for mycket? Kanske. Exakt ratt? Ocksa kanske. Oraklet gillar nar du siktar snyggt i onodan.",
    energy: "8/10",
    chaos: "6/10",
    weather: "Sol genom kontorsfonster"
  }
];

const titleNode = document.querySelector("#result-title");
const descriptionNode = document.querySelector("#result-description");
const energyNode = document.querySelector("#result-energy");
const chaosNode = document.querySelector("#result-chaos");
const weatherNode = document.querySelector("#result-weather");
const button = document.querySelector("#oracle-button");

function pickProphecy() {
  const choice = prophecies[Math.floor(Math.random() * prophecies.length)];

  titleNode.textContent = choice.title;
  descriptionNode.textContent = choice.description;
  energyNode.textContent = choice.energy;
  chaosNode.textContent = choice.chaos;
  weatherNode.textContent = choice.weather;
}

button.addEventListener("click", pickProphecy);
