let counter = 0;
let input = document.getElementById("inputTask");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaList");

function addTask() {
  //GET THE VALUE TYPED IN THE INPUT
  let valorInput = input.value;

  //IF NOT EMPTY, NULL, UNDEFINED
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++counter;

    let novoItem = `<div id="${counter}" class="item">
        <div onclick="marcarTarefa(${counter})" class="item-icon">
            <i id="icon_${counter}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${counter})" class="item-name">
            ${valorInput}
        </div>
        <div class="item-button">
            <button onclick="deletar(${counter})" class="delete"> <i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

    //ADD NEW ITEM IN MAIN
    main.innerHTML += novoItem;

    //RESET THE FIELDS
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");

  if (classe == "item") {
    item.classList.add("clicked");

    var icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-circle-outline");
    icon.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicked");

    var icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-check-circle");
    icon.classList.add("mdi-circle-outline");
  }
}

input.addEventListener("keyup", function (event) {
  //IF ENTER PRESSED (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});