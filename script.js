let display = document.querySelector("p");
let buttons = document.querySelectorAll("button");
let count = 0;
function increment() {
    display.textContent = ++count;
    changeColor();
}

function decrement() {
display.textContent = --count;
changeColor();
}

function reset(){
count = 0;
display.textContent = count;
changeColor();
}

function changeColor(){
if ( count == 0) {
display.style.color = "yellow"
    
}
else if(count>0) {
display.style.color = "green"
}
else{
    display.style.color = "red"
}

}

buttons[0].addEventListener("click",increment);
buttons[1].addEventListener("click",reset);
buttons[2].addEventListener("click", decrement);

