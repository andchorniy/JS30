const buttonsWrapper = document.querySelector('.keys');
document.addEventListener('keydown', e => {
  const pressedButton = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (pressedButton) {
    pressedButton.classList.add('playing');
    const soundToPlay = document.querySelector(
      `audio[data-key="${e.keyCode}"]`,
    );
    soundToPlay.currentTime = 0;
    soundToPlay.play();
  }
});
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));
function removeClass(e) {
  if (e.propertyName == 'transform') {
    this.classList.remove('playing');
  }
}

buttonsWrapper.addEventListener('click', e => {
  if (e.target.nodeName !== 'DIV') return;
  const soundToPlay = document.querySelector(
    `audio[data-key="${e.target.dataset.key}"]`,
  );
  soundToPlay.currentTime = 0;
  soundToPlay.play();
});
