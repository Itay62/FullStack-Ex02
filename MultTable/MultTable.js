const data = ["x",1,2,3,4,5,6,7,8,9,10];

const createTable = () => {
  const tableEl = document.createElement("table");

  firstRow = createFirstRow(data);
  tableEl.appendChild(firstRow);


  for (let i = 1; i < data.length; i++) {
    midRow = createRow(data[i],data.slice(1))
    tableEl.appendChild(midRow)
  }

  return tableEl;
};

const createFirstRow = (values) => {
  const rowEl = document.createElement("tr");
  values.forEach(Item => {
    const col = document.createElement("td");
    col.appendChild(document.createTextNode(Item.toString()))
    rowEl.appendChild(col);
    if (Number.isInteger(Item)) {
      col.style.backgroundColor = "lightblue";
      col.style.fontWeight = "600";
    }
  })
  return rowEl;
};

const createRow = (mult, values) => {
  const rowEl = document.createElement("tr");
  addRowContent(rowEl, mult, values)
  return rowEl;
};

const addRowContent = (row, mult, values) => {
    // First column
    const col = document.createElement("td");
    col.appendChild(document.createTextNode(mult.toString()));
    row.appendChild(col);
    col.style.backgroundColor = "lightblue";
    col.style.fontWeight = "600";
    // Multiplications columns
  values.forEach((item) => {
    const col = document.createElement("td");
    let result = mult * item;
    col.appendChild(document.createTextNode(result.toString()));
    row.appendChild(col)
    // Cells on the diagonal
    if (mult === item) {
      col.style.backgroundColor = "lightblue";
      col.style.fontWeight = "600";
    }
    // Hover equation box creation and event
    let hoverBox = document.createElement("div");
    hoverBox.textContent = mult + " * " + item + " = " + result;
    hoverBox.style.color = '#fff'
    hoverBox.style.display = 'none';
    hoverBox.style.position = 'absolute';
    hoverBox.style.backgroundColor = '#000';
    hoverBox.style.border = '1px solid #ccc';
    hoverBox.style.padding = '5px';
    
    col.appendChild(hoverBox);

    col.addEventListener('mouseover', function(event) {
      let hoverBox = event.target.querySelector('div');
      hoverBox.style.display = 'block';
      col.style.border = 'thick solid black';
    });

    col.addEventListener('mouseout', function(event) {
      let hoverBox = event.target.querySelector('div');
      hoverBox.style.display = 'none';
      col.style.border = '1px solid black';

  });

  });
};

const rootEl = document.getElementById("root");
rootEl.appendChild(createTable());