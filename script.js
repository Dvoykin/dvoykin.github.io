let offset = 0;
const sliderLine = document.querySelector('.slider__box');

document.querySelector('.slider__r-button').addEventListener('click', function(){
    offset = offset + 480;
    if (offset > 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__l-button').addEventListener('click', function () {
    offset = offset - 480;
    if (offset < 0) {
        offset = 2400;
    }
    sliderLine.style.left = -offset + 'px';
});