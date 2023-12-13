const numOfGuests = document.getElementById('num-input').value;
const veg = document.getElementById('vegetarian-input');
const output = document.getElementById('food');
const submit = document.querySelector('#btn');


submit.addEventListener('click', returnFood);

function returnFood() {
if (veg.checked === true) {
  output.innerText = "Winter Squash Risotto";
} else {
  if (numOfGuests >= 5) {
    output.innerText = "Turkey";
  } else {
    output.innerText = "Ham";
  }
 }  
}