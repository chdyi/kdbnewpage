$('.qhl-fore1').click(function () {
    var w = $(window).width()
    var h = $(window).height()
    if ($('.qhl-fore1 span').css('background-color') == 'rgb(201, 201, 201)') {
        return false;
    }
    $('.qhl-pop-body').show().css({width: w, height: h})
    $('.qhl-pop-home').show()

    $('body').css('overflow', 'hidden')
    $('.qhl-pop-home').click(function () {
        $('.qhl-pop-bodys,.qhl-pop-homes').hide()
        $('body').css('overflow', 'auto')
        $('.qhl-fore1 span').css({'background': '#c9c9c9'})
        $('.qhl-red').css('background', '#c9c9c9')
        $(this).hide();
        $('.qhl-pop-body').hide();
    });
});
//一键领取

$('.qhl-fore1-s').click(function () {
    var w = $(window).width()
    var h = $(window).height()
    if ($(this).css('background-color') == 'rgb(201, 201, 201)') {
        return false;
    }
    $('.qhl-pop-body-s').show().css({width: w, height: h})
    $('.qhl-pop-home-s').show()
    $('body').css('overflow', 'hidden')
    $('.qhl-pop-body-s').click(function () {
        $('.qhl-pop-body-s,.qhl-pop-home-s').hide()
        $('body').css('overflow', 'auto')

    })
    var $index = $(this)
    $('.qhl-pop-home-s').click(function () {
        $('.qhl-pop-body-s,.qhl-pop-home-s').hide()
        $('body').css('overflow', 'auto')
        $index.css('background', '#c9c9c9')

        var color = "";
        for (var i = 0; i < $('.qhl-fore1-s').length; i++) {
            color += $('.qhl-fore1-s').eq(i).css('background-color');
        }
        console.log(color.indexOf('rgb(255, 48, 56)'))
        if (color.indexOf('rgb(255, 48, 56)') == -1) {
            $('.qhl-fore1 span').css('background-color', 'rgb(201, 201, 201)')
        }
    })

});
//点击关闭
