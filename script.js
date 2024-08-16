
//  Even or Odd Function

function checkNumber(number)
{
    if (number % 2 === 0) {
        console.log ("Even");
    }
    else {
        console.log ("Odd"); 
    }

}





// Add Item to List
const myItems = document.querySelector(".items")
const testButton = document.querySelector(".add-btn")

const addItems = () => {

    myItems.innerHTML = "<li>You are the first here!</li> <li>You are the second here!</li>"

}
testButton.addEventListener("click", addItems)





// Response Background
const body = document.querySelector(".select")
const success = document.querySelector("#yes")
const failure = document.getElementById("no")

const checkYesResponse = () => {
    body.style.backgroundColor = "green"
    body.style.color = "white"
    body.textContent = "Success!"

}

const checkNoResponse = () => {
    body.style.backgroundColor = "red"
    body.style.color = "white"
    body.textContent = "Failure!"

}

success.addEventListener("click", checkYesResponse)
failure.addEventListener("click", checkNoResponse)



// Fetch and Display Data
const allComments = document.querySelector(".comments")
const getComment = ()=> {

    fetch("https://jsonplaceholder.typicode.com/comments")

    .then(response => response.json())

    .then(feedback => {
        feedback.forEach((element, index)  => {
            allComments.innerHTML += `
                <div>
                <li>
                    <h3>${element.name}</h2>
                    <h4>${element.email}</h3>
                    <p>${element.body}</p>
                </li>
                <hr>
                    </div>
            `
        });
    })
}
getComment()





// Solve and Arithmetic Problem Using a Formula
const mass = 0;
const acceleration = 0;


const  getForce = (mass, acceleration) => {
    const force = mass * acceleration;
    console.log(`The force of a substance is ${force} and the unit is Newton (N)`)
}
getForce()