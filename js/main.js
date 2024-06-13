
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
