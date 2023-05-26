const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo, index) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  if (taskInfo.tipo === "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskInfo.tipo === "Prioritário") {
    span.classList.add("span-priority");
  } else {
    span.classList.add("span-normal");
  }

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  
  button.addEventListener("click", () => {
    tasks.splice(index, 1); 
    renderElements(tasks); 
  });

  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  taskList.forEach((task, index) => {
    let card = createCard(task, index);
    htmlList.appendChild(card);
  });
}


const buttonSubmit=document.getElementById("btnSubmit")
buttonSubmit.addEventListener("click", event => {
  event.preventDefault();

  const tituloText = document.getElementById("input_title");
  const tipoPriority = document.getElementById("input_priority");

  if(tituloText.value != ""){
    const newTask = {
    titulo: tituloText.value,
    tipo: tipoPriority.value,
  }
tasks.push(newTask);
  renderElements(tasks);
  }
    
  tituloText.value = "";
  tipoPriority.value = "Urgente";
});


renderElements(tasks);
