
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: 'json/go-btn.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet', // Adjust as needed to fit within the container
        progressiveLoad: true,
        hideOnTransparent: true
    }
});


var animation12 = lottie.loadAnimation({
    container: document.getElementById('lottie-container-12'),
    renderer: 'canvas',
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
animation2.setSpeed(0.5);

var animation21 = lottie.loadAnimation({
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
animation21.setSpeed(0.5);
