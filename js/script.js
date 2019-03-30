function playSound(e) {
	var keyCode = (e.target.dataset.key) ? e.target.dataset.key : e.keyCode;
	// The line above check if there was a mouse click or either a keyboard click :)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio) return;
    key.classList.toggle('animate');
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e) {
  if (e.propertyName !== 'background-color') return;
  e.target.classList.remove('animate');
}

var notes = document.querySelectorAll('.note');
var events = [{event: "click", func: playSound},{event: "transitionend", func: removeTransition}]
for (var i = 0; i < events.length; i++) notes.forEach(note => addEventListener(events[i].event, events[i].func));
window.addEventListener('keydown', playSound);