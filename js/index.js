let h = document.querySelector("#h");
let m = document.querySelector("#m");

let data = document.querySelector("#data");
let semana = document.querySelector("#semana");

let dataHora = new Date();
//console.log(dataHora)

function addWatch() {
  let momentoAtual = new Date();

  let hora = momentoAtual.getHours();
  let minuto = momentoAtual.getMinutes();
  let segundo = momentoAtual.getSeconds();

  let strHora = new String(hora);
  let strMinuto = new String(minuto);

  if (strMinuto.length == 1) minuto = "0" + minuto;
  if (strHora.length == 1) hora = "0" + hora;

  h.textContent = hora;
  m.textContent = minuto;

  setTimeout("addWatch()", 1000);
}

function giveDate() {
  let day = dataHora.getDate();
  let mounth = dataHora.getMonth() + 1;
  let year = dataHora.getFullYear();
  let monthFull;
  let strDay = new String(day);
  let strMounth = new String(mounth);

  if (strDay.length == 1) mounth = "0" + day;
  if (strMounth.length == 1) mounth = "0" + mounth;
  console.log("tentei");

  if (mounth == 9) {
    monthFull = "Setembro";
  }
  console.log(monthFull);
  console.log(mounth);

  let currentDate = day + " de " + monthFull + " de " + year;

  date.textContent = currentDate;
}
// evocar a funcao
giveDate();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDays").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.daysbtn')) {
    var days = document.getElementsByClassName("days-content");
    var i;
    for (i = 0; i < days.length; i++) {
      var openDays = days[i];
      if (openDays.classList.contains('show')) {
        openDays.classList.remove('show');
      }
    }
  }
}*/

//show and hide dropdown list item on button click
function show_hide() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}
function favTutorial() {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").value =
    mylist.options[mylist.selectedIndex].text;
  console.log(document.getElementById("favourite").value);
}


  
  //var => varivel global! e que possui mudanças internas 

//var a = 1

// var a ="oiiiii"



const localStorage = ["teste"]
localStorage = "aaaaaaa"
console.log(localStorage)



//let b = 2
// b = 2 || b = Tres {}  for (... let b = 0 )
// // const  saudacao = () => { 
//      return 'bem-vindo' 
//   }

function createdTask() {
  let textContent = document.querySelector(".activity").value;
  let weekDay = document.querySelector("#favourite").value;
  let hours = document.getElementById("input-time").value;

  const divideHours = hours.split(":")
  const formatedHours = divideHours[0]+ "h" +divideHours[1]+ "m"
  console.log()
  
  const schedule = document.createElement("div");
  schedule.classList.add("to-do-schedule");
  const appointment = document.createElement("div");
  appointment.classList.add("make-appointments");
  const task = document.createElement("div");
  task.classList.add("task");
  schedule.appendChild(appointment);
  schedule.appendChild(task);

  switch (weekDay) {
    case "Segunda-feira":
      task.classList.add("taskMon");
      break;
    case "Terça-feira":
      task.classList.add("taskTues");
      break;
    case "Quarta-feira":
      task.classList.add("taskWednes");
      break;
    case "Quinta-feira":
      task.classList.add("taskThurs");
      break;
    case "Sexta-feira":
      task.classList.add("taskFri");
      break;
    case "Sabado":
      task.classList.add("taskSatur");
      break;
    case "Domingo":
      task.classList.add("taskSun");
      break;
  }

  
 

  appointment.innerHTML = `<h6>${formatedHours}</h6>`;

  task.innerHTML = `  <div class="content">
    <p>${textContent}</p>
  </div>
 <button class="out"> <!-- Delete -->
    Apagar
 </button>`;

  document.querySelector(".schedules").appendChild(schedule);
}

function teste() {
  console.log(document.querySelector(".activity").value);
  console.log(document.getElementById("input-time").value);
  console.log(document.querySelector("#favourite").value);
}
