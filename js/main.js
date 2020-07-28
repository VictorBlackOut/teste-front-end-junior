var modalBtn = document.querySelector('.instrumentos-linha1-img4');
var modalBg = document.querySelector('.div-modal');
var modalClose = document.querySelector('.div-modal-btn');

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
}); 

//Modal linha 1
var modalBtn1 = document.querySelector('.instrumentos-linha1-img1');
var modalBg1 = document.querySelector('.div-modal1');
var modalClose1 = document.querySelector('#button-close1');

modalBtn1.addEventListener('click',function(){
    modalBg1.classList.add('bg-active');
});

modalClose1.addEventListener('click',function(){
    modalBg1.classList.remove('bg-active');
}); 


//Modal linha 1 img2
var modalBtn2 = document.querySelector('.instrumentos-linha1-img2');
var modalBg2 = document.querySelector('.div-modal2');
var modalClose2 = document.querySelector('#button-close2');

modalBtn2.addEventListener('click',function(){
    modalBg2.classList.add('bg-active');
});

modalClose2.addEventListener('click',function(){
    modalBg2.classList.remove('bg-active');
}); 

//Modal linha 1 img3
var modalBtn3 = document.querySelector('.instrumentos-linha1-img3');
var modalBg3 = document.querySelector('.div-modal3');
var modalClose3 = document.querySelector('#button-close3');

modalBtn3.addEventListener('click',function(){
    modalBg3.classList.add('bg-active');
});

modalClose3.addEventListener('click',function(){
    modalBg3.classList.remove('bg-active');
}); 

//Modal linha 2
var modalBtnL2 = document.querySelector('.instrumentos-linha2-img1');
var modalBgL2 = document.querySelector('.div-modal-linha2');
var modalCloseL2 = document.querySelector('#button-linha2-close');

modalBtnL2.addEventListener('click',function(){
    modalBgL2.classList.add('bg-active');
});

modalCloseL2.addEventListener('click',function(){
    modalBgL2.classList.remove('bg-active');
}); 

//Modal linha 2 img 2
var modalBtnL22 = document.querySelector('.instrumentos-linha2-img2');
var modalBgL22 = document.querySelector('.div-modal-linha2-2');
var modalCloseL22 = document.querySelector('#button-linha2-close2');

modalBtnL22.addEventListener('click',function(){
    modalBgL22.classList.add('bg-active');
});

modalCloseL22.addEventListener('click',function(){
    modalBgL22.classList.remove('bg-active');
}); 


//Modal linha 2 img3
var modalBtnL23 = document.querySelector('.instrumentos-linha2-img3');
var modalBgL23 = document.querySelector('.div-modal-linha2-3');
var modalCloseL23 = document.querySelector('#button-linha2-close3');

modalBtnL23.addEventListener('click',function(){
    modalBgL23.classList.add('bg-active');
});

modalCloseL23.addEventListener('click',function(){
    modalBgL23.classList.remove('bg-active');
}); 

//Modal linha 2 img4
var modalBtnL24 = document.querySelector('.instrumentos-linha2-img4');
var modalBgL24 = document.querySelector('.div-modal-linha2-4');
var modalCloseL24 = document.querySelector('#button-linha2-close4');

modalBtnL24.addEventListener('click',function(){
    modalBgL24.classList.add('bg-active');
});

modalCloseL24.addEventListener('click',function(){
    modalBgL24.classList.remove('bg-active');
}); 

// Carousel Slider

const carouselSlide = document.querySelector('.imageBG');
const carouselImage = document.querySelectorAll('.imageBG img');

//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImage[0].clientWidth;


//Buttons Listeners

nextBtn.addEventListener('click',()=>{
    //Counter

    if(counter >= carouselImage.length -1) return;

    carouselSlide.style.transition = "transform 1s ease-in-out";

    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    
});

prevBtn.addEventListener('click',()=>{

    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";

    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImage[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if(carouselImage[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});