const scramble = document.getElementById("scrambleWord");
const guess = document.getElementById("guess");
const random = document.getElementById("random");
const reset = document.getElementById("reset");
const alert = document.getElementById("alert")

let palabras = [
  "bebida",
  "besado",
  "biblia",
  "bistec",
  "blanca",
  "bloque",
  "bolita",
];

let rigthword =  ''

function clear() {
  guess.value = "";
}

function trying() {
  return Math.floor(Math.random() * 7);
}

function scrambleWords() {
  let palabrasNum = palabras[trying()];
  rigthword = palabrasNum;
  word = palabrasNum.split("");
  console.log(rigthword);
  
  const sorting = word.sort();
  const join = sorting.join("");

  scramble.textContent = join;

  random.textContent = "Random";
  return join;
}

function check() {
    
    if (guess.value.toLowerCase() === rigthword.toLowerCase()) {
        alert.textContent = "You are correct!";
    } else {
        alert.textContent = "Try again!";
    }


}

reset.addEventListener("click", clear);
random.addEventListener("click", scrambleWords);
guess.addEventListener('keydown', check);