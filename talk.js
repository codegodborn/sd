$(function() {
    $('#yes').click(function(event) {
        modal('我就知道你会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', I);
    });
});

// function A() {
//     modal('我喜欢你！', B);
// }

// function B() {
//     modal('我知道你在等我这一句话', C);
// }

// function C() {
//     modal('请您不要拒绝我', D);
// }

// function D() {
//     modal('拒绝我，不存在的', E);
// }

// function E() {
//     modal('这辈子都不可能让你离开我', F);
// }

// function F() {
//     modal('跟我走吧', G);
// }

// function G() {
//     modal('房产证上写你名', H);
// }

// function H() {
//     modal('我会做饭', I);
// }

function I() {
    modal('好好好，连烟花都不愿意和我看了是吧', J)
}

function J() {
    modal('这可由不得你，看', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
