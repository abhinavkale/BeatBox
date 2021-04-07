let beats={
  "a": "./assets/Piano Chord 331.mp3",
  "s": "./assets/Piano Chord 209.mp3",
  "d": "./assets/Piano Chord 208.mp3",
  "f": "./assets/Drum Sticks Hit 3.mp3",
  "g": "./assets/Drum Snare Roll.mp3",
  "h": "./assets/PREL Musical 57.mp3",
  "j": "./assets/Cymbal Suspended 2.mp3",
  "k": "./assets/Musical Compos 33.mp3",
  "l": "./assets/Musical Orches 4.mp3",
  
}

const playBeat = function(buttonKey){
      let audioSrc=beats[buttonKey];
      let audio = new Audio(audioSrc);
      audio.currentTime=0;
      audio.play();
  
}


/*const playB=function(){
  let button=document.getElementById('button');
  let key=button.TextValue;
  let keys=toLowerCase(key);
  let audioSrc=beats[keys];
  let audio = new Audio(audioSrc);
  audio.currentTime=0;
  audio.play();
}*/

//document.addEventListener("click",playB());




document.addEventListener("keydown",(event)=> playBeat(event.key));a