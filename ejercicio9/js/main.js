const cat = document.getElementById('myCat');
let position = 0;
let direction = 1;
const step = 10;
const interval = 70;

function catWalk() {
  position += (step * direction);
  cat.style.left = position + 'px';
  const windowWidth = window.innerWidth;

  if (position >= windowWidth - cat.width) {
    direction = -1;
    cat.style.transform = 'scaleX(-1)';
    document.body.style.backgroundColor = getRandomColor();
    showEmoji('😺');
  } else if (position <= 0) {
    direction = 1;
    cat.style.transform = 'scaleX(1)';
    document.body.style.backgroundColor = getRandomColor();
    showEmoji('😸');
  }
}

function getRandomColor() {
  const colors = ['#ff6f61', '#ffcc5c', '#88d8b0', '#ff6f69', '#ffcc5c', '#ffeead', '#96ceb4'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showEmoji(emoji) {
  const emojiElement = document.createElement('div');
  emojiElement.textContent = emoji;
  emojiElement.style.position = 'absolute';
  emojiElement.style.left = `${position}px`;
  emojiElement.style.bottom = '100px';
  emojiElement.style.fontSize = '2rem';
  emojiElement.style.transition = 'opacity 1s';
  document.body.appendChild(emojiElement);

  setTimeout(() => {
    emojiElement.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(emojiElement);
    }, 1000);
  }, 500);
}

setInterval(catWalk, interval);