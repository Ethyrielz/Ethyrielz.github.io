//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
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
page5btn.addEventListener("click", function () {
    show(5);
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
function CheckAns(event){

  event.preventDefault(); // <-- This stops the page from reloading

   const q1Element = document.querySelector("input[name='q1']:checked");
    if (!q1Element) {
        scorebox.innerHTML = "Please answer all questions";
        return;
    }

    const q2Element = document.querySelector("input[name='q2']:checked");
    if (!q2Element) {
        scorebox.innerHTML = "Please answer question 2";
        return;
    }
    
    const q3Element = document.querySelector("input[name='q3']:checked");
    if (!q3Element) {
        scorebox.innerHTML = "Please answer question 3";
        return;
    }
    
    const q4Element = document.querySelector("input[name='q4']:checked");
    if (!q4Element) {
        scorebox.innerHTML = "Please answer question 4";
        return;
    }

    q1 = q1Element.value;
    q2 = q2Element.value;
    q3 = q3Element.value;
    q4 = q4Element.value;

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


function CheckAns2(event){

  event.preventDefault();

    const allCheckboxes = document.querySelectorAll("input[name='offhand']");
    const checkedBoxes = document.querySelectorAll("input[name='offhand']:checked");

    if (checkedBoxes.length === 0) {
        scorebox2.textContent = "Please select at least one option.";
        return;
    }

    if (checkedBoxes.length === allCheckboxes.length) {
        scorebox2.textContent = "That's right!";
    } else {
        scorebox2.textContent = "There's more!";
    }
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

function playSwordSound() {
    // Create audio element
    const audio = new Audio('Swords-Clashing.mp3'); // Replace with your sound file
    audio.volume = 0.5; // Adjust volume (0.0 to 1.0)
    audio.play().catch(error => {
        console.log('Audio play failed:', error);
    });
}

function swordCatch() {

playSwordSound();
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
