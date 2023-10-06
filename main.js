// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const errMessage = document.getElementById('modal-message');




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
  })
  
}






const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', (event) => {
      mimicServerCall()
      .then(() => {
        console.log(event.target);
        if (event.target.classList.contains("activated-heart")) {
          event.target.classList.remove("activated-heart");
          console.log( 'before if');
          event.target.innerText = EMPTY_HEART;
        } else {
          event.target.classList.add("activated-heart");
          event.target.innerText = FULL_HEART;
          console.log( 'after if');
        }
      })
      .catch(() => {
        errorModal.classList.remove("hidden");
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
    }
  
  
   
  )
});


