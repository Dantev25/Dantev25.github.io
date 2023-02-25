let toggle=document.querySelector("#header .toggle-button");
let collapse=document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"));
})

var icon = document.getElementById("moon-icon");
icon.onclick = function(){
     

     if(icon.classList.contains("fa-moon")){
      document.body.classList.toggle("dark-theme");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-cloud");
    } else if (icon.classList.contains("fa-cloud")){
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("cloud-theme");
      icon.classList.remove("fa-cloud");
      icon.classList.add("fa-sun");
    } else{
      document.body.classList.toggle("cloud-theme");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }



//drag and drop
var diffX, diffY, theElement;

// The event handler function for grabbing the word

function grabber(event) {

// Set the global variable for the element to be moved

  theElement = event.currentTarget;

// Determine the position of the word to be grabbed,
//  first removing the units from left and top

  var posX = parseInt(theElement.style.left);
  var posY = parseInt(theElement.style.top);

// Compute the difference between where it is and 
//  where the mouse click occurred

  diffX = event.clientX - posX;
  diffY = event.clientY - posY;

// Now register the event handlers for moving and 
//  dropping the word
 
  document.addEventListener("mousemove", mover, true);
  document.addEventListener("mouseup", dropper, true);

// Stop propagation of the event and stop any default 
//  browser action

  event.stopPropagation();
  event.preventDefault();

}  //** end of grabber

// *******************************************************

// The event handler function for moving the word

function mover(event) {

// Compute the new position, add the units, and move the word

  theElement.style.left = (event.clientX - diffX) + "px";
  theElement.style.top = (event.clientY - diffY) + "px";

// Prevent propagation of the event

  event.stopPropagation();
}  //** end of mover

// *********************************************************
// The event handler function for dropping the word

function dropper(event) {

// Unregister the event handlers for mouseup and mousemove

  document.removeEventListener("mouseup", dropper, true);
  document.removeEventListener("mousemove", mover, true);

// Prevent propagation of the event

  event.stopPropagation();
}  //** end of dropper

/////////////////////////
//comparison slide
function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function:*/
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /*get the width and height of the img element*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }


// form validation and session storage

// When the page is loaded
window.onload = function() {
  // Check if session storage exists for the form data
  if (sessionStorage.getItem('regform')) {
    // If it exists, set the form fields to the saved data
    var form = document.forms.regform;
    var savedData = JSON.parse(sessionStorage.getItem('regform'));
    form.firstname.value = savedData.firstname;
    form.lastname.value = savedData.lastname;
    form.status.value = savedData.status;
    form.gender.value = savedData.gender;
    form.phone.value = savedData.phone;
    form.address.value = savedData.address;
    form.email.value = savedData.email;
    form.motivation.value = savedData.motivation;
    form.suggestion.value = savedData.suggestion;
    form.subscribe.checked = savedData.subscribe;
  }
};

//form validation
function validateForm() {
  // Get values from form inputs
  const firstName = document.forms["regform"]["firstname"].value;
  const lastName = document.forms["regform"]["lastname"].value;
  const phone = document.forms["regform"]["phone"].value;
  const email = document.forms["regform"]["email"].value;
  const address = document.forms["regform"]["current-address"].value;
  const motivation = document.forms["regform"]["motivation"].value;
  const project = document.forms["regform"]["project"].value;

  // Validate first name
  if (firstName === "") {
    alert("Please enter your first name");
    return false;
  }

  // Validate last name
  if (lastName === "") {
    alert("Please enter your last name");
    return false;
  }

  // Validate phone number
  if (phone === "") {
    alert("Please enter your phone number");
    return false;
  } else if (!/^\+?\d+$/.test(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  // Validate email
  if (email === "") {
    alert("Please enter your email address");
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate address
  if (address === "") {
    alert("Please enter your current address");
    return false;
  }

  // Validate motivation
  if (motivation === "") {
    alert("Please tell us more about yourself and why you want to join our club");
    return false;
  }

  // Validate project suggestion
  if (project === "") {
    alert("Please suggest a project you wish we could start");
    return false;
  }

  // All inputs are valid, return true to submit the form
  return true;
}

// When the form is submitted
document.forms.regform.addEventListener('submit', function(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data and store it in session storage as a JSON string
  var form = document.forms.regform;
  var data = {
    firstname: form.firstname.value,
    lastname: form.lastname.value,
    status: form.status.value,
    gender: form.gender.value,
    phone: form.phone.value,
    address: form.address.value,
    email: form.email.value,
    motivation: form.motivation.value,
    suggestion: form.suggestion.value,
    subscribe: form.subscribe.checked
  };
  sessionStorage.setItem('regform', JSON.stringify(data));

  // Submit the form
  form.submit();
});