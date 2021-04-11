    window.onresize = loadHeight;
    loadHeight()
    function loadHeight() {
        console.log("test");
        var caruselHeight = window.screen.height;
        var width = window.screen.width;
        document.getElementById('carouselExampleSlidesOnly').setAttribute("style", "height:calc(" + caruselHeight + "px - 160px) !important")
    }