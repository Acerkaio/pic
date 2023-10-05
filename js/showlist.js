for (var i = 0; i < Repository.Repository.length; i++) {
    var item = Repository.Repository[i];
    var newString = item.url.slice(6);
    $('#Mcontect').html($('#Mcontect').html() + `
    <div class="mdui-grid-tile">
        <img data-src="https://cdn.jsdelivr.net/gh/Acerkaio/ImageHost@1.0/${newString}" />
        <div class="mdui-grid-tile-actions">
            <div class="mdui-grid-tile-text">
                <div class="mdui-grid-tile-title">${item.title}</div>
                <div class="mdui-grid-tile-subtitle"><i class="mdui-icon material-icons">&#xe851;</i>${item.author}</div>
            </div>
            <div class="mdui-grid-tile-buttons">
                <button class="mdui-btn mdui-btn-icon"><i
                        class="mdui-icon material-icons">star_border</i></button>
            </div>
        </div>
    </div>`);
}