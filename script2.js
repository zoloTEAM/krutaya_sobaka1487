const img = document.querySelector(".karusel");
const imgNum = 4;
const delay = 2000;
img.width = 700;

let i = 1;
setTimeout(function tick(){
	i = i + 1;
	if (i > imgNum) i = 1;
	img.src = `images/${i}.webp`;
	setTimeout(tick, delay);
}, delay);