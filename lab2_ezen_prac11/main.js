//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const hamBtn = document.querySelector("#hamIcon");
var allpages = document.querySelectorAll(".page");
const menuItemsList=document.querySelector("ul");
const btnSubmit=document.querySelector("#btnSubmit");
const btnSubmit2=document.querySelector("#btnSubmit2");
const scorebox=document.querySelector("#scorebox"); 
const scorebox2=document.querySelector("#scorebox2"); 
const scorebox3 = document.getElementById("scorebox3");

function hideall() {
  for (let onepage of allpages) {
    onepage.classList.remove("active");
  }
}

function show(pgno) {
  hideall();
  const onepage = document.querySelector("#page" + pgno);
  onepage.classList.add("active");
}



/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
hideall();
function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}

show(1);
hamBtn.addEventListener("click", toggleMenus);


var q1, q2, q3, q4, q5, q6, q7, q8, q9, score=0;
function CheckAns(){
    q1=document.querySelector("input[name='q1']:checked").value;
    console.log(q1);
    q2=document.querySelector("input[name='q2']:checked").value;
    console.log(q2);
    q3=document.querySelector("input[name='q3']:checked").value;
    console.log(q3);
    q4=document.querySelector("input[name='q4']:checked").value;
    console.log(q4);
    score = 0;
    if(q1=="Langort")score++;
    if(q2=="Pflug")score++;
    if(q3=="ochs")score++;
    if(q4=="Alber")score++;
    scorebox.innerHTML="Score:"+score;
}
btnSubmit.addEventListener("click", CheckAns);


function CheckAns2(){
    q5=document.querySelector("input[name='q5']:checked").value;
    console.log(q5);
    q6=document.querySelector("input[name='q6']:checked").value;
    console.log(q6);
    q7=document.querySelector("input[name='q7']:checked").value;
    console.log(q7);
    q8=document.querySelector("input[name='q8']:checked").value;
    console.log(q8);
    q9=document.querySelector("input[name='q9']:checked").value;
    console.log(q9);
 
    scorebox2.innerHTML="u right";
}
btnSubmit2.addEventListener("click", CheckAns2);


const moves = ["Attack", "Parry", "Feint"];

function getAIMove() {
  const rand = Math.floor(Math.random() * moves.length);
  return moves[rand];
}

function play(playerMove) {
  const aiMove = getAIMove();
  let outcome = "";

  if (playerMove === aiMove) {
    outcome = "It's a draw!";
  } else if (
    (playerMove === "Attack" && aiMove === "Feint") ||
    (playerMove === "Feint" && aiMove === "Parry") ||
    (playerMove === "Parry" && aiMove === "Attack")
  ) {
    outcome = "You win!";
  } else {
    outcome = "You lose!";
  }

  document.getElementById("player-move").textContent = playerMove;
  document.getElementById("ai-move").textContent = aiMove;
  document.getElementById("outcome").textContent = outcome;
}


var score3 = 0;

const swordId = document.getElementById("swordId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveSword() {
    // Simple responsive positioning - use percentage of window size
    const maxWidth = window.innerWidth * 0.6; 
    const maxHeight = window.innerHeight * 0.3;
    
    swordId.style.left = GetRandom(0, maxWidth) + "px";
    swordId.style.top = GetRandom(0, maxHeight) + "px";
}
moveSwordItvId = setInterval(MoveSword, 500);

function swordCatch() {
//decreases score after clicking
score3-=10;
//update html scorebox
scoreBox3.innerHTML = "Score: " + score3;
}
//link durian to mouseclick to durianCatch function
swordId.addEventListener("click",swordCatch);



const helmetId = document.getElementById("helmetId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveHelmet() {
    // Simple responsive positioning - use percentage of window size
    const maxWidth = window.innerWidth * 0.7; // 70% of screen width
    const maxHeight = window.innerHeight * 0.4; // 40% of screen height
    
    helmetId.style.left = GetRandom(0, maxWidth) + "px";
    helmetId.style.top = GetRandom(0, maxHeight) + "px";
}
moveHelmetItvId = setInterval(MoveHelmet, 1000);

function helmetCatch() {
//increases score after clicking
score3++;
//update html scorebox
scoreBox3.innerHTML = "Score: " + score3;
}
//link durian to mouseclick to durianCatch function
helmetId.addEventListener("click",helmetCatch);

window.addEventListener('resize', function() {
    // Move items to new valid positions after resize
    MoveSword();
    MoveHelmet();
});
