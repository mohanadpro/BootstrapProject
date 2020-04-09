$(function(){
    

    // adjust slide bar height

    var windowHeight=$(window).height();
    var navHeight=$('.navbar').innerHeight();
    var upperHeight=$('.upper-bar').innerHeight();

    $('.slider,.carousel-inner').height(windowHeight - (navHeight+upperHeight))

})