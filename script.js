// 1) Select the section with an id of container without using querySelector.
const ques1 = document.getElementById('container');


// 2) Select the section with an id of container using querySelector.

const ques2 = document.querySelector('section');



// 3) Select all of the list items with a class of "second".

const ques3 = document.getElementsByClassName('second');


// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

const ques4 = document.getElementsByClassName('third');
console.log(ques4[1]);


// 5) Give the section with an id of container the text "Hello!".

const ques5 = document.getElementById('container');
const text = document.createTextNode("Hello!");

ques5.appendChild(text);


// 6) Add the class main to the div with a class of footer.

let ques6 = document.getElementsByClassName('footer');
ques6.classList.add("main");

// 7) Remove the class main on the div with a class of footer.

ques6.classList.remove("main");

// 8) Create a new li element.

let ques8 = document.createElement('li');


// 9) Give the li the text "four".

ques8.innerText = "four";

// 10) Append the li to the ul element.

let ques10 = document.querySelector('ul');
ques10.appendChild(ques8);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

let ques11 = document.getElementsByTagName('ol');

for(let i = 0; i < ques11.length; i++){
  ques11[i].style.backgroundColor = 'green';
}



// 13) Remove the div with a class of footer.
let ques13 = document.getElementsByClassName("footer");
ques13[0].remove();