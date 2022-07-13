$(function () {
    $("nav").find("a").click(function () {
        let target = $(this).data("target");
        let _offset = $(target).offset().top;
        // console.log(_offset);
        $("html,body").animate({
            scrollTop: _offset
        })
    })
    $("#gotop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        })
        return false;
    })
    $(window).scroll(function () {
        let h = $("html,body").scrollTop();
        console.log(h);
        if (h > 1200) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });
})