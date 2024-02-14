var StyleFlag = 1;
function SwitchStyle() {
    $('html').toggleClass('mdui-theme-dark', 'mdui-theme-light');
    if (StyleFlag == 1) {
        StyleFlag = 0;
        $('#SwitchStyle').html('<ion-icon name="moon-outline"></ion-icon>');
    } else {
        StyleFlag = 1;
        $('#SwitchStyle').html('<ion-icon name="sunny-outline"></ion-icon>');
    }
}