$(function(){
    

    // adjust slide bar height

    var windowHeight=$(window).height();
    var navHeight=$('.navbar').innerHeight();
    var upperHeight=$('.upper-bar').innerHeight();

    $('.slider,.carousel-inner').height(windowHeight - (navHeight+upperHeight))


    // Featured work shffel
    // when I click on li 
    $('.featuredwork .list-unstyled ul li').on('click',function()
    {
        // add class 'active' on the pressed li and remove 'active' class from the siblings
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffel .col-sm').css('opacity','1')           
        }
        else
        {
            $('.shuffel .col-sm').css('opacity','0.09') ;
            $($(this).data('class')).parent().css('opacity','1')   
        }
    })

})