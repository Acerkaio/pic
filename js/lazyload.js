Call_lazy();

function Call_lazy() {
    var imgs = document.querySelectorAll('img');
    lazyLoad(imgs);
    //offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
    function getTop(e) {
        var T = e.offsetTop;
        while(e = e.offsetParent) {
            T += e.offsetTop;
        }
        return T;
    }

    function lazyLoad(imgs) {
        var H = document.documentElement.clientHeight;//获取可视区域高度
        var S = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < imgs.length; i++) {
            if (H + S > getTop(imgs[i])) {
                imgs[i].src = imgs[i].getAttribute('data-src');
            }
        }
    }

    window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
        lazyLoad(imgs);
    }
}