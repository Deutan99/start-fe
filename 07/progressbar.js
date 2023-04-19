const progressBar = document.querySelector('#progress');
const increaseProgress = () => {
  let currentWidth = parseInt(progressBar.style.width);
  if (isNaN(currentWidth)) {
    currentWidth = 0;
  }
  if (currentWidth >= 100) {
    clearInterval(progressInterval);
  } else {
    currentWidth += 10;
    progressBar.style.width = `${currentWidth}%`;
  }
};
const progressInterval = setInterval(increaseProgress, 1000);
