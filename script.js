let index = 0;
let total = 5;
let changingText=['Bustling Town', 'Green Valleys', 'Rocky Mountains', 'Quiet Forest', 'Vast Plains'];
let textIndex=0;
function nextImg() {
    index = index+1;
    if (index === total) index = 0;

    document.getElementById("carousel").style.transform =
        `translateX(-${index * 300}px)`;
        text();
}

function previousImg() {
    index = index - 1;
    if (index < 0) index = total-1;

    document.getElementById("carousel").style.transform =
        `translateX(-${index * 300}px)`;
    text();
}

function text(){
   document.querySelector(".description").innerHTML=changingText[textIndex];
   textIndex++
   if(textIndex >= changingText.length) {
     textIndex=0;
   }
}
setInterval(nextImg, 3000);
