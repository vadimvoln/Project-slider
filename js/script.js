let position = 0;
let timer;
const sliderLine = document.querySelector('.polosa');
document.querySelector('.left').onclick = sliderLeft;

autoSlider();

function autoSlider() {
	timer = setTimeout(sliderLeft, 4000);
}

function sliderLeft(){
	position = position - 679;
	if (position < -1358) {
		position = 0;
		clearTimeout(timer);
	}
	sliderLine.style.left = position + 'px';
	autoSlider();
}

document.querySelector('.right').addEventListener('click', function() {
	position = position + 679;
	if (position > 0) {
		position = -1358;
	}
	sliderLine.style.left = position + 'px';
});

document.querySelector('.dot1').addEventListener('click', function() {
	if (position != 0) {
		position = 0;
	}
	sliderLine.style.left = position + 'px';
});
document.querySelector('.dot2').addEventListener('click', function() {
	if (position != -679) {
		position = -679;
	}
	sliderLine.style.left = position + 'px';
});
document.querySelector('.dot3').addEventListener('click', function() {
	if (position != -1358) {
		position = -1358;
	}
	sliderLine.style.left = position + 'px';
});
document.querySelector('.one').addEventListener('click', function() {
	if (position != 0) {
		position = 0;
	}
	sliderLine.style.left = position + 'px';
});
document.querySelector('.two').addEventListener('click', function() {
	if (position != -679) {
		position = -679;
	}
	sliderLine.style.left = position + 'px';
});
document.querySelector('.three').addEventListener('click', function() {
	if (position != -1358) {
		position = -1358;
	}
	sliderLine.style.left = position + 'px';
});