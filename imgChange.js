const img = document.getElementById('image');
const images = [];
images[0] = '/images/001.png';
images[1] = '/images/002.png';
images[2] = '/images/003.png';

var index = 0;

const change = setInterval(function() {
    if (index < images.length - 1) {
        index++
    } else {
        index = 0;
    }
    img.src = images[index];
}, 8000);