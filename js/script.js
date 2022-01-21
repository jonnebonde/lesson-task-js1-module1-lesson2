// question 1

const hello = document.querySelector("h3");
hello.innerHTML = "Hello";


// question 2


const margin = document.querySelectorAll("h4");

for(let i = 0; i < margin.length; i++) {
    margin[i].style.marginBottom = "-20px";
}

// question 3


const secondH4 = document.querySelector("h4.two");
secondH4.style.backgroundColor = "red";

// question 4


const paragraph = document.querySelectorAll("p");

paragraph[0].style.fontSize = "24px";
paragraph[0].style.color = "blue";


// question 5

paragraph[2].innerHTML = "<span>" + paragraph.innerHTML + "</span>";


// question 6


const newParagraph = document.querySelector(".content");
newParagraph.innerHTML = newParagraph.innerHTML + "<p>newcontent</p>";


//question 7


const addParagraph = document.querySelectorAll(".content p");

for(let i = 0; i < addParagraph.length; i++) {

addParagraph[i].classList.add("content-item");

}

//question 8


const newList = document.querySelector("#services");

newList.innerHTML = "<li>Number 1</li>" + newList.innerHTML;


// question 9


const removeClass = document.querySelector("ul");

removeClass.classList.remove("service-list");


// question 10

const hideElement = document.querySelector("#hide");

hideElement.style.display = "none";











