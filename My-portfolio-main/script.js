let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};  

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};



// Function to validate email
function validateEmail() {
  // Get the email input element
  var emailInput = document.querySelector('input[type="Email"]');
  
  // Regular expression for a valid email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the entered email matches the regex
  if (emailRegex.test(emailInput.value)) {
      // Valid email
      alert('Email is valid!');
  } else {
      // Invalid email
      alert('Please enter a valid email address!');
  }
}

// Attach the validateEmail function to the button click event
var sendButton = document.querySelector('.contact-button');
sendButton.addEventListener('click', validateEmail);



