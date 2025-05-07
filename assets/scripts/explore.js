// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth=window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speech = document.getElementById('text-to-speak');
  const faceIcon = document.querySelector('#explore img');
  const button = document.querySelector('#explore button');
  let voices;
  function populateVoiceList(){
    voices = synth.getVoices();
    for (let i=0; i<voices.length;i++){
      const option = document.createElement('option');
      option.textContent=`${voices[i].name} (${voices[i].lang})`;

      if(voices[i].default){
       option.textContent+="- DEFAULT";

      }
      option.setAttribute("data-lang",voices[i].lang);
      option.setAttribute('data-name',voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }
  button.addEventListener('click',()=>{
    const text = speech.value.trim();
    const utter=new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i=0; i<voices.length;i++){
      if(voices[i].name===selectedOption){
        utter.voice=voices[i];
      }

    }
    utter.addEventListener('start',()=>{
      faceIcon.src='assets/images/smiling-open.png';
      

    });
    utter.addEventListener('end',()=>{
      faceIcon.src='assets/images/smiling.png';
    });
    synth.speak(utter);
    speech.blur();
  });
}