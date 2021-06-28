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


window.addEventListener("resize", AutoScale);

AutoScale();
function AutoScale()
{
let width = window.innerWidth;

if(width > 1280)
{
ChangeScale("big");
}
else if(width <= 1280 && width > 720)
{
ChangeScale("normal");
}
else if(width < 720)
{
ChangeScale("small");
}}


