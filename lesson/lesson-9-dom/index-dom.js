const root = document.querySelector("#root");
// console.log(root)

// row.append([cell, cell, cell]);
// root.append([row, row, row]);
const verificationMove = (player, cellValue) => {
  console.log(cellValue);
  if (!cellValue) {
    if (player === "x") {
      return "x";
    }
    return "0";
  }
};

let currentPlayer = "x";
const createPlayField = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.textContent = "Tik Tac Toe";

  const btnReset = document.createElement("button");
  btnReset.classList.add("btn");
  btnReset.textContent = "Reset";

  const btnStart = document.createElement("button");
  btnStart.classList.add("btn");
  btnStart.textContent = "Start";

  const score = document.createElement("div");
  score.classList.add("score");
  score.textContent = "0 : 0";

  const player = document.createElement("div");
  player.classList.add("player");
  player.textContent = "0";

  document.body.append(header, btnReset, btnStart, score, player);

  for (let i = 0; i < 3; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 3; j += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", () => {
        const turn = verificationMove(currentPlayer, cell.textContent);
        cell.textContent = turn;
        currentPlayer = currentPlayer === "x" ? "0" : "x";
      });

      row.append(cell);
    }
    root.append(row);
  }
};

createPlayField();
