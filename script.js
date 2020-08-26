const slide = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator').children;
let index = 0;

prev.addEventListener('click', function() {
    prevSlide()
    updateIndicator()
})

next.addEventListener('click', function() {
    nextSlide()
    updateIndicator()
})

function indicatorEvent() {
    for (let i = 0; i < slide.length; i++) {
        indicator[i].setAttribute('onclick', 'indicateSlide(this)');
        indicator[i].id = i;
    }
}

indicatorEvent();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateIndicator();
    resetTimer()
}

function updateIndicator() {
    for (let i = 0; i < indicator.length; i++) {
        indicator[i].classList.remove('active');
    }
    indicator[index].classList.add('active');
}

function prevSlide() {
    if (index == 0) {
        index = slide.length - 1;
    } else {
        index--;
    }
    changeSlide();
    resetTimer()
}

function nextSlide() {
    if (index == slide.length - 1) {
        index = 0;
    } else {
        index++;
    }

    changeSlide();
    resetTimer()
}

function changeSlide() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
    }

    slide[index].classList.add('active');
}

function autoPlay() {
    nextSlide();
    updateIndicator();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 3000);
}

let timer = setInterval(autoPlay, 3000);