// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage=document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  hornSelect.addEventListener('change',()=>{
    const str=hornSelect.value;
    if(str==='air-horn'){
      hornImage.src='assets/images/air-horn.svg';
      hornAudio.src='assets/audio/air-horn.mp3';
    }else if(str==='car-horn'){ 
      hornImage.src='assets/images/car-horn.svg';
      hornAudio.src='assets/audio/car-horn.mp3';  
    }else if(str==='party-horn'){ 
      hornImage.src='assets/images/party-horn.svg';
      hornAudio.src='assets/audio/party-horn.mp3';
    }
  });

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input',()=>{
    const vol = parseInt(volumeSlider.value);
    hornAudio.volume=vol/100;
    if(vol===0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }else if (vol<33){
      /*display image*/
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }else if (vol<66){
      /*display image*/
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
  const jsConfetti = new JSConfetti();
  const playButton = document.querySelector('#expose button');
  playButton.addEventListener('click',()=>{
    hornAudio.play();
    if( hornSelect.value==='party-horn'){
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
        confettiRadius: 4,
        confettiNumber: 50,
        

      })
    }
  });

}