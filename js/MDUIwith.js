var $ = mdui.$;
var inst = new mdui.Drawer('#drawer');
inst.close();
// method
$('#toggle').on('click', function () {
    inst.toggle();
});
// 消息提示s
$('.unrealized').on('click', function () {
    mdui.snackbar({
        message: '暂未实现'
    });
});