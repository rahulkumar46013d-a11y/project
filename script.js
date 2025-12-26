let text = [
  "Final Year B.Tech CSE Student",
  "Web Developer",
  "Programmer"
];

let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect(){
  if(charIndex < text[index].length){
    typingElement.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1500);
  }
}

function deleteEffect(){
  if(charIndex > 0){
    typingElement.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();
