// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Select the glyphs
const likeGlyphs = document.querySelectorAll('.like-glyph');

// Function to toggle heart
function toggleHeart(heart) {
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch(error => {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = error;
        modal.classList.remove('hidden');

        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  }
  else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

//Add event listeners to like glyphs

likeGlyphs.forEach(heart => {
  heart.addEventListener('click', () => toggleHeart(heart));
});



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
