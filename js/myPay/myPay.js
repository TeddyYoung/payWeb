/**
 * Created by zhoujc on 2016/7/20.
 */

$(function() {
    //�ö�
    $("#go-top").hover(
        function () {
            $(this).attr('src', 'img/go-top-hover.png');
        },
        function () {
            $(this).attr('src', 'img/go-top.png');
        }
    );
    $("#go-top").click(function () {
        $('body').animate({scrollTop: 0}, 1000);
    });
    window.onload=function(){//ˢ�·��ض���
        $('html,body').animate({scrollTop: '0px'}, 400);
    };
});