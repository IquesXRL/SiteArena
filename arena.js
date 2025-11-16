/*Menu hamburguer*/
const exibeDropdown = () =>{
    const toggle = document.querySelector(".menu-header");
    toggle.classList.toggle('exibe-dropdown')
}

/*Sliders*/

let currentIndex = 0;
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length;

function showSlide(index) {
    if(index < 0){
        currentIndex = totalSlides -1;
    } else if(index >= totalSlides) {
        currentIndex =0;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(-${currentIndex * 100}%`;
    document.querySelector('.sliderImg').style.transform = newTransform;
}

function prevSlideBT(){
    showSlide(currentIndex -1);
}

function nextSlideBT(){
    showSlide(currentIndex +1);
}

showSlide(currentIndex);

/*Planos */
const precosAulas = document.querySelector('.precosAulas')
const precosDayUse = document.querySelector('.precosDayUse')
const precosClubinho = document.querySelector('.precosClubinho')

function exibeAulas(){
    precosDayUse.classList.remove('exibePrecos')
    precosClubinho.classList.remove('exibePrecos')
    precosAulas.classList.toggle('exibePrecos')
}

function exibeDayUse(){
    precosAulas.classList.remove('exibePrecos')
    precosClubinho.classList.remove('exibePrecos')
    precosDayUse.classList.toggle('exibePrecos')
}

function exibeClubinho(){
    precosDayUse.classList.remove('exibePrecos')
    precosAulas.classList.remove('exibePrecos')
    precosClubinho.classList.toggle('exibePrecos')
}

/*Sec 8 - slider Society */

let currentIndexSociety = 0;
const slidesSociety = document.querySelectorAll('.slideSociety')
const totalSlidesSociety = slidesSociety.length;

function showSlideSociety(index) {
    if(index < 0){
        currentIndexSociety = totalSlidesSociety -1;
    } else if(index >= totalSlidesSociety) {
        currentIndexSociety =0;
    } else {
        currentIndexSociety = index;
    }

    const newTransformSociety = `translateX(-${currentIndexSociety * 100}%`;
    document.querySelector('.sliderImgSociety').style.transform = newTransformSociety;
}

function prevSlideSociety(){
    showSlideSociety(currentIndexSociety -1);
}

function nextSlideSociety(){
    showSlideSociety(currentIndexSociety +1);
}

/*Sec 9 - Slider Escolinha */

let currentIndexEscolinha = 0;
const slidesEscolinha = document.querySelectorAll('.slideEscolinha')
const totalSlidesEscolinha = slidesEscolinha.length;

function showSlideEscolinha(index) {
    if(index < 0){
        currentIndexEscolinha = totalSlidesEscolinha -1;
    } else if(index >= totalSlidesEscolinha) {
        currentIndexEscolinha =0;
    } else {
        currentIndexEscolinha = index;
    }

    const newTransformEscolinha = `translateX(-${currentIndexEscolinha * 100}%`;
    document.querySelector('.sliderImgEscolinha').style.transform = newTransformEscolinha;
}

function prevSlideEscolinha(){
    showSlideEscolinha(currentIndexEscolinha -1);
}

function nextSlideEscolinha(){
    showSlideEscolinha(currentIndexEscolinha +1);
}