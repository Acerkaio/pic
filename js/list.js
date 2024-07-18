let catchColumn = Math.max(parseInt((document.getElementById("container").clientWidth + 20) / (300 + 20)), 1);
let pdS = (document.getElementById("container").clientWidth - catchColumn * 320 + 20) / 2;
let sumHeight = toTwoDimensionalArray(catchColumn).map(() => 0);
let tot = 0;

Promise.all(ImageData.map(item => {
    return new Promise(resolve => {
        const img = new Image();
        img.src = item.src;
        img.onload = function () {
            tot++;
            var width = this.width;
            var height = this.height;
            height = 300 * height / width;
            width = 300;
            item.width = width;
            item.id = tot;
            item.height = height;
            const minIndex = minValIndex(sumHeight);
            item._top = minIndex * (300 + 20);
            const newItem = document.createElement("div");
            newItem.classList.add("list-item");
            newItem.classList.add(`ElainaPic-${tot}`);
            newItem.style.width = width + 'px';
            newItem.style.height = height + 'px';
            newItem.style.transform = `translate(${minIndex * (300 + 20) + pdS}px, ${sumHeight[minIndex]}px)`;
            newItem.innerHTML =
                `<mdui-card variant="elevated" style="width: 300px;height: fit-content">
                <img src="${item.src}" alt="ERR" style="width: 300px; height: auto;">
                <div>
                <div style="position: absolute; bottom: 0px; left: 0px; width: 300px; height: 60px; background-color: rgba(85, 85, 85, 0.781);"></div>
                </div>
                <div>
                <div style="position: absolute; bottom: 5px; left: 5px;">
                    <mdui-button onclick="amplify('${item.src}')">large</mdui-button>
                    <mdui-button>original</mdui-button>
                </div>
                </div>
            </mdui-card>`
                ;
            document.getElementById("container").appendChild(newItem);
            sumHeight[minIndex] += height + 20;
            resolve();
        };
    });
})).then(() => {
    console.log("All images loaded.");
    sumHeight = toTwoDimensionalArray(catchColumn).map(() => 0);
    ImageData.forEach(function (item) {
        const minIndex = minValIndex(sumHeight);
        document.getElementsByClassName(`ElainaPic-${item.id}`)[0].style.transform = `translate(${minIndex * (300 + 20) + pdS}px, ${sumHeight[minIndex]}px)`
        sumHeight[minIndex] += item.height + 20;
    });
}).catch(error => {
    console.error("Error loading images:", error);
});

function toTwoDimensionalArray(count) {
    let list = [];
    for (let index = 0; index < count; index++) {
        list.push([]);
    }
    return list;
}

function minValIndex(arr = []) {
    let val = Math.min(...arr);
    return arr.findIndex(i => i === val);
}