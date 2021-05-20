// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#modal")
  const hearts = document.getElementsByClassName("like-glyph")
  // const hearts = document.querySelectorAll("span.like-glyph")
  for (const heart of hearts) {
  heart.addEventListener("click", (e) => {
    // make a server call
    mimicServerCall() // return a promise 
    // promises have the .then()
    .then(() => {
      if (heart.innerHTML == EMPTY_HEART){
        heart.innerHTML = FULL_HEART 
        heart.className = "activated-heart"
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = "like-glyph"
      } 
    })
    .catch(error => {
      modal.hidden = false
      const modalMessage = document.querySelector("#modal-message")
      modalMessage.innerText = error
      setTimeout(() => {
        modal.hidden = true
       }, 5000)
    })
  })
  }
  console.log(hearts)
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
