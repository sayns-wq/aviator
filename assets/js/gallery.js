

const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        btn = document.querySelectorAll('.btn__slider'); 

let offset = 0;
let slideIndex = 1;
// let width = window.innerWidth;

// setInterval(myCallback, 500)
// function myCallback() {
//     return width = window.innerWidth;
// };


slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '1s all';
slidesWrapper.style.overflow = 'hidden';
btn[0].classList.add('active');

slides.forEach(slide => {
    slide.style.width = window.innerWidth;
});

next.addEventListener('click', () => {
    if (offset == (window.innerWidth * (slides.length - 1))) {
        offset = 0;
    } else {
        offset += window.innerWidth; 
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    changeColor(); 

});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = window.innerWidth * (slides.length - 1);
    } else {
        offset -= window.innerWidth;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    changeColor();   
});

btn[0].addEventListener('click', () => {
    slideIndex = 1;
    changeColor();
    slidesField.style.transform = `translateX(-${0}px)`;
    offset = 0;
    
});

btn[1].addEventListener('click', () => {
    slideIndex = 2;
    changeColor(); 
    offset = window.innerWidth;
    slidesField.style.transform = `translateX(-${offset}px)`;
});

btn[2].addEventListener('click', () => {
    slideIndex = 3;
    changeColor(); 
    offset = window.innerWidth * 2;
    slidesField.style.transform = `translateX(-${offset}px)`;
});

btn[3].addEventListener('click', () => {
    slideIndex = 4;
    changeColor(); 
    offset = window.innerWidth * 3;
    slidesField.style.transform = `translateX(-${offset}px)`;
});



function changeColor () {
    if (slideIndex == 1 ){
        btn[0].classList.add('active');
        btn[1].classList.remove('active');
        btn[2].classList.remove('active');
        btn[3].classList.remove('active');
    } else if (slideIndex == 2){
        btn[1].classList.add('active');
        btn[0].classList.remove('active');
        btn[2].classList.remove('active');
        btn[3].classList.remove('active');
    } else if (slideIndex == 3){
        btn[2].classList.add('active');
        btn[1].classList.remove('active');
        btn[0].classList.remove('active');
        btn[3].classList.remove('active');
    } else {
        btn[3].classList.add('active');
        btn[1].classList.remove('active');
        btn[2].classList.remove('active');
        btn[0].classList.remove('active');
    }   
}

// function deleteNotDigits(str){
//     return +str.replace(/\D/g ,'');
// }


    
    // slidesField.style.width = 84.5 * slides.length + '%';
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';
    // slidesWrapper.style.overflow = 'hidden';
    // slides.forEach(slide => {
    //     slides.style.width = width;
    // });

    // nextBtn.addEventListener('click', () => {
    //     if (offset == +width.slice(0,width.length - 2) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0,width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });

    // prevBtn.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = +width.slice(0,width.length - 2) * (slides.length - 1);
    //     } else {
    //         offset -= +width.slice(0,width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });

    // showSlides(indexSlide);

    // function showSlides(n) {
    //     if (n > slides.length){
    //         indexSlide = 1;
    //     }

    //     if (n < 1){
    //         indexSlide = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');
    //     slides[indexSlide - 1].style.display = 'block';
    // };

    // function plusSlides(n) {
    //     showSlides(indexSlide += n);
    // };
    
    // prevBtn.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // nextBtn.addEventListener('click', () => {
    //     plusSlides(1);
    // });




