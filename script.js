let index = 0;
let total = 5;
let changingText=['Bustling Town', 'Green Valleys', 'Rocky Mountains', 'Quiet Forest', 'Vast Plains'];

function validate() {
const checkPassword=document.getElementById("password").value;
const checkConfirmPassword=document.getElementById("confirmPassword").value;
const name=document.querySelector("#name").value;
const email=document.querySelector("#email").value;
const password=document.querySelector("#password").value;
const confirmPasscode=document.querySelector("#confirmPassword").value;
const username=document.querySelector("#username").value;
 if(name===''||password===''||email===''||confirmPasscode===''||username==='') {
       return alert("COMPLETE FORM!!!");
  }

  else {
    alert("Nice Job!");
  }
  
 if(checkPassword===checkConfirmPassword) {
    alert("You're password aligns our needs");
 }

 else {
   alert(`${checkPassword} and ${checkConfirmPassword} do not match`);
 }
}

function nextImg() {
    index = index+1;
    if (index === total) index = 0;
    updateCarousel()
}

function previousImg() {
    index = index - 1;
    if (index < 0) index = total-1;
    updateCarousel()
}

function updateCarousel() {
    document.getElementById("carousel").style.transform = `translateX(-${index * 300}px)`;

    document.querySelector(".description").innerHTML = changingText[index];
}

setInterval(nextImg, 3000);
