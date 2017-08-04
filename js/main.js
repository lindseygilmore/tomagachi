
// animated image //

var position = 0;
var right = true;

setInterval(function(){
  if(right){
    position++;
    if(position === 3){
      right = false;
    }
  }else{
    position--;
    if(position === 0){
      right = true;
    }
  }
  $('.dog').css("opacity", '0');
  $('#dog-' + position).css('opacity', '1');

},
1000);

// attributing hunger //     

var hunger = 0;
var hungerInterval = window.setInterval(
     function () {
         hunger = hunger + 1;
         if (hunger === 10){
          clearInterval(hungerInterval);
         }
         document.getElementById("hungerLevel").innerText = hunger;
     }, 6000);
     if (hunger < 10){
        console.log("Feeling good!");
   }

var hungerButton = document.getElementById('feed');
hungerButton.addEventListener('click', function(){
  hunger = 0;
  document.getElementById("hungerLevel").innerText = hunger;
})


// attributing sleepiness //

var sleep = 0;
var sleepInterval = window.setInterval(
     function () {
         sleep = sleep + 1;
         if (sleep === 10){
          clearInterval(sleepInterval);
         }
         document.getElementById("sleepLevel").innerText = sleep;
     }, 3000);
     if (sleep < 10){
        console.log("Feeling good!");
   }

var sleepButton = document.getElementById('play');
sleepButton.addEventListener('click', function(){
  sleep = 0;
  document.getElementById("sleepLevel").innerText = sleep;
})


// attributing boredom //

var bored = 0;
var boredInterval = window.setInterval(
     function () {
         bored = bored + 1;
         if (bored === 10){
          clearInterval(boredInterval);
          alert('HE DEAD');
         }
         document.getElementById("boredomLevel").innerText = bored;
     }, 1000);

var entertainButton = document.getElementById('entertain')
entertainButton.addEventListener('click', function(){
  bored = 0;
  document.getElementById("boredomLevel").innerText = bored;
})

  
// age //

var age = 0;
     window.setInterval(
     function () {
         age = age + 1;
         document.getElementById("ageIncrease").innerText = age;
     }, 5000);
    



