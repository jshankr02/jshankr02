$(function(){
    $(".con").on("mouseenter",function(){
        vid = $(this).find("video").get(0);
        vid.play();
        $(this).stop().animate({width:"80%"})
        $("h3").stop().animate({margin:"0px",opacity:1})
        $("p").stop().animate({margin:"0px",opacity:1})
        $(".ga").stop().animate({opacity:1})
        $(".de").stop().animate({opacity:1})
        $("video").stop().animate({opacity:1})
    })

    $(".con").on("mouseleave",function(){
        vid.pause();
        $(this).stop().animate({width:"25%"})
        $("h3").stop().animate({margin:"-100px",opacity:0})
        $("p").stop().animate({margin:"-210px",opacity:0})
        $(".ga").stop().animate({opacity:0})
        $(".de").stop().animate({opacity:0})
        $("video").stop().animate({opacity:0})
    })
});