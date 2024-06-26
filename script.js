const container = document.querySelector(".container");

// Keyboard-pop-up
document.addEventListener('DOMContentLoaded', function () {
  const passwordField = document.querySelector('input[type="password"]');

  passwordField.addEventListener('focus', function () {
    showKeyboard();
    disableHardwareKeyboard();
  });

  passwordField.addEventListener('blur', function () {
    enableHardwareKeyboard();
  });

  const loginBtn = document.querySelector('.btn.solid'); // Corrected selector for login button

  loginBtn.addEventListener('click', function () { // Corrected event listener name
    hideKeyboard();
  });

  const virtualKeyboardButtons = document.querySelectorAll('.btn-keyboard');

  virtualKeyboardButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      handleKey(button.textContent);
    });
  });
});

function showKeyboard() {
  document.getElementById('virtual-keyboard').style.display = 'block';
}

function hideKeyboard() {
  document.getElementById('virtual-keyboard').style.display = 'none';
}

function disableHardwareKeyboard() {
  document.addEventListener('keydown', preventDefault);
}

function enableHardwareKeyboard() {
  document.removeEventListener('keydown', preventDefault);
}

function preventDefault(event) {
  event.preventDefault();
}

const buttons = document.querySelectorAll('.btn-keyboard');
const passwordInput = document.querySelector('input[type="password"]');
const deleteBtn = document.querySelector('.delete');
const enterBtn = document.querySelector('.enter');



deleteBtn.addEventListener('click', () => {
  passwordInput.value = '';
});

enterBtn.addEventListener('click', () => {
  hideKeyboard();
});



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// Filter out the digits from buttons
const digits = Array.from(buttons).filter(button => button.innerText.match(/[0-9]/));

// Shuffle the digits array
shuffleArray(digits);

// Add event listeners to buttons
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.innerText !== 'Enter' && btn.innerText !== 'Delete') {
      // Handle input before shuffling
      if (btn.innerText !== 'Enter') {
        passwordInput.value += btn.innerText;
      }

      // Display indices of digits
      digits.forEach((button, index) => {
        button.innerText = index;
      });

      // Shuffle the digits array
      shuffleArray(digits);
    }
  });
});


const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
  const passwordInput = document.getElementById('password');
  const svgIcon = document.getElementById('eye-icon');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    svgIcon.innerHTML = '<img src="img/eye.svg">';
  } else {
    passwordInput.type = 'password';
    svgIcon.innerHTML = '<img src="img/eye-slash.svg">';
  }
});


function handleKey(){

  var inputElement = document.getElementById("virtual-keyboard");
  var inputValue = inputElement.value;

  console.log("Input Value:", inputValue);

  inputElement.value = "";

}