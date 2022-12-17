const body = document.querySelector('body');
const startButton = document.getElementById('start-box');
const fontBox = document.getElementById('font-box');
const namel = document.getElementById('text');
const mader = document.getElementById('text1');

startButton.onclick = function(event) {
    startButton.style.backgroundColor = 'black';
    startButton.style.visibility = 'hidden';

    fontBox.style.transform = 'translate(-50%, 40%)';

    setTimeout(function(){
        mader.style.color = 'white';
    }, 3600);

    setTimeout(function(){
        mader.style.color = '';
        namel.style.color = 'black';

        mader.style.visibility = 'hidden';
        namel.style.visibility = 'hidden';

    }, 5700);

    setTimeout(function(){
        location.href = 'choose.html';
    }, 6800);
};