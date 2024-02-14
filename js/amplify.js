function amplify(url) {
    const dialog = document.querySelector("#amplify-img-dialog");
    dialog.innerHTML = `
    <div style="margin: 0 auto; text-align: center; padding: 0;">
        <img src="${url}" alt="ERR" style="width: auto; height: auto; max-width: calc(100vw - 52px); max-height: calc(100vh - 52px);">
    </div>
    
    <mdui-button-icon selectable icon="close-outline" style="position: absolute; top: 0px; left: 0px;" onclick="CLOSEamplify()"><ion-icon name="close-outline"></ion-icon></mdui-button-icon>

    `;
    const snackbar = document.querySelector(".amplify-img-snackbar");
    snackbar.open = true;
    dialog.open = true;
}

function CLOSEamplify() {
    const dialog = document.querySelector("#amplify-img-dialog");
    dialog.open = false;
    const snackbar = document.querySelector(".amplify-img-snackbar");
    snackbar.open = false;
}