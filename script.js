let clickedCell = document.getElementById("clickedCell");

function displayNumber(event) {
    let dataValue = event.target.textContent;
    clickedCell.textContent = dataValue;
}

let container = document.createElement("div");
let ChessTable = document.createElement("table");
let letters = "ABCDEFGH";
for (let i = 8; i > 0; i--) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 8; j++) {
    let td = document.createElement("td");
    td.textContent = 8 - i+1 + letters.charAt(j);
    if ((i + j) % 2 == 0) {
      td.setAttribute("class", "cell whitecell");
    } else {
        td.setAttribute("class", "cell letter blackcell");
    }
    td.addEventListener("click", displayNumber);
    tr.appendChild(td);
  }
  ChessTable.appendChild(tr);
}
container.appendChild(ChessTable);
container.setAttribute("style", "display:flex;justify-content:center");
ChessTable.setAttribute("cellspacing", "0");
ChessTable.setAttribute("width", "570px");
ChessTable.setAttribute("height", "570px");
document.body.appendChild(container);

