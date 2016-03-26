/**
 * Created by Administrator on 2016/2/12.
 */
//图片渐变
$(function(){
    var cenji=100,
        speen=500,
        timer=null,
        sex=0
    $(".l_img ol li").on('click',function(e){
      cenji++;
    $(this).addClass("l_bg").siblings().removeClass();
        var index=$(this).index();
        $(".l_img ul li").eq(index).css({zIndex:cenji}).hide().fadeIn();
         sex=index;
    });
     timer=setInterval(set,4000);
    function set(){
        cenji++;
        sex++;
        if(sex>7){
            sex=0;
        }
        $(".l_img ol li").eq(sex).addClass("l_bg").siblings().removeClass();
        $(".l_img ul li").eq(sex).css({zIndex:cenji}).hide().fadeIn(speen);
    }
  $(".l_img").hover(function(e){
      clearInterval(timer);
  },function(){
      timer=setInterval(set,4000);
  })
});
//图片手风琴
$(function() {
    var ul = $(".f_img ul");
    //var index=0;
    //var timer=null;
    $(".f_img ul li").eq(0).addClass('f_width');
    $('.f_img ul li').hover(function () {
        //clearInterval(timer);
        $('.f_img ul li').removeClass('f_width');
        $(this).addClass('f_width').stop().animate({ width: '400px'}, 300).siblings().stop().animate({
            right: 0,
            width: '133px'
        }, 300);
    });
    $(".f_img ul li span").width(402).eq(this).addClass("f_none");
    $(".f_img ul li").on('mouseover',function(){
            var index=$(this).index()
            $(".f_img ul li span").eq(index).css('display','none');
    });


    $(".f_img ul li").on('mouseout',function(){
        var index=$(this).index()
        $(".f_img ul li span").eq(index).css('display','block');

    })
});

//图片动画---国内(选项卡)
    $(function () {
        $('.m_xuan ul li').on('click', function () {
            $(this).addClass('m_color').siblings().removeClass();
            var index = $(this).index();
            $('.m_uls .m_top ').eq(index).show().siblings().hide();
        })
    })
//图片动画---国内(图片)
//    $(function () {
//        var uls = $('.m_top ul ');
//        $('.m_top ul li').on('mouseover', function () {
//            var index = $(this).index();
//            $('.m_img img').eq(index).stop().animate({top: -7}, 200);
//        });
//        $('.m_top ul li').on('mouseout', function () {
//            var index = $(this).index();
//            $('.m_img img').eq(index).stop().animate({top: 0}, 200);
//        });
//    });
////图片动画---海外(选项卡)
    $(function () {
        $('.m_xiang ul li').on('click', function () {
            $(this).addClass('m_color').siblings().removeClass();
            var index = $(this).index();
            $('.m_haiwai .m_shang ').eq(index).show().siblings().hide();
        })
    })
////图片动画---海外(图片)
//    $(function () {
//        $('.m_shang ul li').on('mouseover', function () {
//            var index = $(this).index();
//            $('.m_img1 img').eq(index).stop().animate({top: -7}, 200);
//        });
//        $('.m_shang ul li').on('mouseout', function () {
//            var index = $(this).index();
//            $('.m_img1 img').eq(index).stop().animate({top: 0}, 200);
//        });
//    })


//旅游指南
    $(function () {
        $('.z_qh ul li').on('mouseover', function () {
            $(this).addClass("z_bg").siblings().removeClass('z_bg');
            var index = $(this).index();
            $('.z_tu ul li').eq(index).show().siblings().hide();
        })
    })
//页脚--td(动画)
    $(function () {
        $('.f_wenben dl dd a').on('mouseover', function () {
            var index = $(this).index();
            $(this).eq(index).stop().animate({left: 5}, 200);
        });
        $('.f_wenben dl dd a').on('mouseout', function () {
            var index = $(this).index();
            $(this).eq(index).stop().animate({left: 0}, 200);
        });
    })
//返回按钮
    function black() {
        $(document).scroll(function () {
            if ($(document).scrollTop() >= 600) {
                $('.black a').stop().css('display', 'block');
            } else {
                $('.black a').stop().css('display', 'none');
            }
        });
    }
    black();
    $('.black').on('click', function () {
        var top = $(document).scrollTop();
        (function () {
            var timer = setInterval(function () {
                if (top > 0) {
                    top = top - 100;
                    $(document).scrollTop(top);
                } else {
                    clearInterval(timer);
                }
            }, 30)
        })();
    })
