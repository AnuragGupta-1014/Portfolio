var typed = new Typed('#element', {
    strings: ['Python Programmer', 'AI/ML Enthusiast', 'Python Web Developer', 'Natural Language Processing Enthusiast.'],
    typeSpeed: 80,
});

const prevEle = document.querySelector(".prev");
const nextEle = document.querySelector(".next");
const imgContainerEle = document.querySelector(".img-container");
const imgEle = document.querySelectorAll(".pr-img");
const slider = document.querySelector('.slider');

let currImg = 1;
let timeout;

nextEle.addEventListener("click", () => {
    currImg++;
    clearTimeout(timeout);
    updateImg();
});

prevEle.addEventListener("click", () => {
    currImg--;
    clearTimeout(timeout);
    updateImg();
});

slider.addEventListener('mouseover', () => clearTimeout(timeout));
slider.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        currImg++;
        updateImg();
    }, 2000);
});

updateImg();

function updateImg() {
    if (currImg > imgEle.length) {
        currImg = 1;
    } else if (currImg < 1) {
        currImg = imgEle.length;
    }
    imgContainerEle.style.transform = `translateX(${-(currImg - 1) * 100}%)`;

    timeout = setTimeout(() => {
        currImg++;
        updateImg();
    }, 2000);
}
