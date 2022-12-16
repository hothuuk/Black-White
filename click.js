const body = document.querySelector('body');
const startButton = document.getElementById('start-box');
const fontBox = document.getElementById('font-box');
const mader = document.getElementById('text1');
const circle = document.getElementById('circle');

startButton.onclick = function(event) {
    startButton.style.backgroundColor = 'black';
    startButton.style.visibility = 'hidden';

    fontBox.style.transform = 'translate(-50%, 40%)';
    mader.style.color = 'white';
};