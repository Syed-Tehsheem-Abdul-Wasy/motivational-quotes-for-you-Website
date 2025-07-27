//Variable
let quote=document.querySelector('p')
let button=document.querySelector('button')

let quotations = [
  "Practice makes man perfect",
  "Work Hard and Stay Consistent you will be successful",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "Don’t watch the clock; do what it does. Keep going",
  "Believe you can and you’re halfway there",
  "Great things never come from comfort zones",
  "Push yourself, because no one else is going to do it for you",
  "Dream it. Wish it. Do it",
  "Success doesn’t just find you. You have to go out and get it",
  "The harder you work for something, the greater you’ll feel when you achieve it",
  "Don’t stop when you’re tired. Stop when you’re done"
];


//Logics

function getQuote(){
    let randomNumber=Math.floor(Math.random()*quotations.length)
    quote.innerHTML=quotations[randomNumber]

}


//addEventListener
button.addEventListener('click',getQuote)