let left = 0;
let timer;


function autoSlider () {
	timer = setTimeout(function () {
	let slider_img = document.querySelector('.slider_img');
	left=left-128;
	if(left<-512){
		left = 0;
	}
	slider_img.style.left=left+'px';
	autoSlider();
}, 2000)
}
autoSlider();




/*
function sliderRight () {
	let slider_img = document.querySelector('.slider_img');
	right=right+128;
	if(left<512){
		left = 0;
	}
	slider_img.style.left=right+'px';
}
*/