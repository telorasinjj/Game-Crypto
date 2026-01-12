let gold = 0;
let goldPerSecond = 0;

const minersData = [
  {
    name: "Alpha",
    income: 0.01,
    cost: 10,
    img: "Alpa.png"
  },
  {
    name: "Dragon",
    income: 0.3,
    cost: 30,
    img: "Alpa.png"
  },
  {
    name: "Warrior",
    income: 0.5,
    cost: 50,
    img: "Alpa.png"
  },
  {
    name: "Goldsmith",
    income: 0.6,
    cost: 70,
    img: "Alpa.png"
  },
  {
    name: "Beast",
    income: 0.10,
    cost: 100,
    img: "Alpa.png"
  },
  {
    name: "valkyrie",
    income: 0.12,
    cost: 120,
    img: "Alpa.png"
  },
  {
    name: "mistique",
    income: 0.14,
    cost: 140,
    img: "Alpa.png"
  },
  {
    name: "Earth Dragon",
    income: 0.16,
    cost: 160,
    img: "Alpa.png"
  }
];


const minersContainer = document.getElementById("miners");
const goldDisplay = document.getElementById("gold");
const gpsDisplay = document.getElementById("gps");

function updateUI() {
  goldDisplay.textContent = Math.floor(gold);
  gpsDisplay.textContent = goldPerSecond;
}

function mine() {
  gold++;
  updateUI();
}

function hireMiner(index) {
  const miner = minersData[index];

  if (gold >= miner.cost) {
    gold -= miner.cost;
    goldPerSecond += miner.income;
    updateUI();
  }
}

function renderMiners() {
  minersContainer.innerHTML = "";
  

  minersData.forEach((miner, index) => {
    minersContainer.innerHTML += `
      <div class="d-felx col-6 col-md-4">
        
        <div class="card d-felx text-center p-2">
        <div>
            <img src="${miner.img}" class="img-fluid items-center" width=300px"/>
        </div>
          <h6>${miner.name}</h6>
          <p class="small">+${miner.income}/sec</p>
          <button class="btn btn-sm btn-warning w-100"
            onclick="hireMiner(${index})">
            Hire (${miner.cost})
          </button>
        </div>
      </div>
    `;
  });
}

setInterval(() => {
  gold += goldPerSecond;
  updateUI();
}, 1000);

renderMiners();
updateUI();
