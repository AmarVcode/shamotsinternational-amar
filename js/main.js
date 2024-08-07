
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/go-btn.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});


var animation2 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/go-btn.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

var animation3 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-32'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/go-btn.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

var animation4 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/go-btn.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});


var animation5 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/go-btn.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});



var animation21 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/owl.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

// Set the playback speed to 0.5 (half speed)
animation21.setSpeed(0.5);

var animation22 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-21'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/owl.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

// Set the playback speed to 0.5 (half speed)
animation22.setSpeed(0.5);

var animation23 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-22'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/owl.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

// Set the playback speed to 0.5 (half speed)
animation23.setSpeed(0.5);


var animation24 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-23'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/owl.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

// Set the playback speed to 0.5 (half speed)
animation24.setSpeed(0.5);

var animation25 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-24'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/owl.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

// Set the playback speed to 0.5 (half speed)
animation25.setSpeed(0.5);














//menu code




/////////////////////////////////////////////////////
/////////////////////  ICON 1  //////////////////////
/////////////////////////////////////////////////////

///Initiation Variables
var icon_1 = document.getElementById("b1");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  // can be "menu" or "arrow"
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;

///Animation Variables
var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;

///Menu Disappear 
function menuDisappearAnimation_1() {
    currentFrame_1++;
    if (currentFrame_1 <= menuDisappearDurationInFrames_1) {
        window.requestAnimationFrame(() => {
            //top line
            topLineY_1 = AJS.easeInBack(37, 50, menuDisappearDurationInFrames_1, currentFrame_1);
            topLine_1.setAttribute("d", "M30," + topLineY_1 + " L70," + topLineY_1);
            //bottom line
            bottomLineY_1 = AJS.easeInBack(63, 50, menuDisappearDurationInFrames_1, currentFrame_1);
            bottomLine_1.setAttribute("d", "M30," + bottomLineY_1 + " L70," + bottomLineY_1);
            //recursion
            menuDisappearAnimation_1();
        });
    } else {
        middleLine_1.style.opacity = "0";
        currentFrame_1 = 1;
        menuDisappearComplete_1 = true;
        openMenuAnimation_1();
    }
}

///Cross Appear
function arrowAppearAnimation_1() {
    currentFrame_1++;
    if (currentFrame_1 <= arrowAppearDurationInFrames_1) {
        window.requestAnimationFrame(() => {
            //top line
            topLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
            topLeftY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
            bottomRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
            bottomRightY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
            topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
            //bottom line
            bottomLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
            bottomLeftY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
            topRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
            topRightY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
            bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
            //recursion
            arrowAppearAnimation_1();
        });
    } else {
        currentFrame_1 = 1;
        arrowAppearComplete_1 = true;
        openMenuAnimation_1();
    }
}

///Combined Open Menu Animation
function openMenuAnimation_1() {
    if (!menuDisappearComplete_1) {
        menuDisappearAnimation_1();
    } else if (!arrowAppearComplete_1) {
        arrowAppearAnimation_1();
    }
}

///Cross Disappear
function arrowDisappearAnimation_1() {
    currentFrame_1++;
    if (currentFrame_1 <= arrowDisappearDurationInFrames_1) {
        window.requestAnimationFrame(() => {
            //top line
            topLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
            topLeftY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
            bottomRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
            bottomRightY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
            topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
            //bottom line
            bottomLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
            bottomLeftY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
            topRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
            topRightY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
            bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
            //recursion
            arrowDisappearAnimation_1();
        });
    } else {
        middleLine_1.style.opacity = "1";
        currentFrame_1 = 1;
        arrowDisappearComplete_1 = true;
        closeMenuAnimation_1();
    }
}

///Menu Appear
function menuAppearAnimation_1() {
    currentFrame_1++;
    if (currentFrame_1 <= menuAppearDurationInFrames_1) {
        window.requestAnimationFrame(() => {
            //top line
            topLineY_1 = AJS.easeOutBack(50, 37, menuDisappearDurationInFrames_1, currentFrame_1);
            topLine_1.setAttribute("d", "M30," + topLineY_1 + " L70," + topLineY_1);
            //bottom line
            bottomLineY_1 = AJS.easeOutBack(50, 63, menuDisappearDurationInFrames_1, currentFrame_1);
            bottomLine_1.setAttribute("d", "M30," + bottomLineY_1 + " L70," + bottomLineY_1);
            //recursion
            menuAppearAnimation_1();
        });
    } else {
        currentFrame_1 = 1;
        menuAppearComplete_1 = true;
        closeMenuAnimation_1();
    }
}

///Close Menu Animation
function closeMenuAnimation_1() {
    if (!arrowDisappearComplete_1) {
        arrowDisappearAnimation_1();
    } else if (!menuAppearComplete_1) {
        menuAppearAnimation_1();
    }
}

///Events
icon_1.addEventListener("click", () => {
    if (state_1 === "menu") {
        openMenuAnimation_1();
        state_1 = "arrow";
        arrowDisappearComplete_1 = false;
        menuAppearComplete_1 = false;
    } else if (state_1 === "arrow") {
        closeMenuAnimation_1();
        state_1 = "menu";
        menuDisappearComplete_1 = false;
        arrowAppearComplete_1 = false;
    }
});


let menushow = false;
let mymenu = document.getElementById("navbar-mobile");

function showmymenu(){
    if(menushow === false){
    mymenu.style.height="300px";
    menushow = true;
    }
    else{
    mymenu.style.height="0px";
    menushow = false;

    }
}



let minimenushow = false;
let minimymenu = document.getElementById("mini-menu");

function showminimenu(){
    if(minimenushow === false){
        minimymenu.style.transform="scale(1,1)";
        minimenushow = true;
        }
        else{
        minimymenu.style.transform="scale(1,0)";
        minimenushow = false;
    
        }
}










$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function() {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }
    
    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 4000);
    }
    
    $('.next_btn').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });
    
    $('.previous_btn').on('click', function() {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });
    
    $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function() {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    $this.on('mouseenter', function() {
        clearTimeout(timeout);
    }).on('mouseleave', function() {
        advance();
    });
    
    advance();
});







//code for animate about us section

var aboutAnimation = lottie.loadAnimation({
    container: document.getElementById('myAboutAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/aboutAnimation.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});

















//testimonial slider code
let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-2024');
const dots = document.querySelectorAll('.dot-2024');

const showSlide = (index) => {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    document.getElementById('testimonialSlider').style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

const autoSlide = () => {
    showSlide(slideIndex + 1);
    autoSlideTimer = setTimeout(autoSlide, 5000);
}

let autoSlideTimer = setTimeout(autoSlide, 5000);

const currentSlide = (index) => {
    showSlide(index);
    clearTimeout(autoSlideTimer);
    autoSlideTimer = setTimeout(autoSlide, 5000);
}

// Pause sliding on hover
document.querySelector('.slider-container-2024').addEventListener('mouseover', () => {
    clearTimeout(autoSlideTimer);
});

document.querySelector('.slider-container-2024').addEventListener('mouseout', () => {
    autoSlideTimer = setTimeout(autoSlide, 5000);
});

// Initial layout adjustment
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.testimonial-2024').forEach(slide => {
            slide.style.flexDirection = 'column';
            slide.style.textAlign = 'center';
        });
    }
});