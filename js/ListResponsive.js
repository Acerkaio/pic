const d = () => {
    catchColumn = Math.max(parseInt((document.getElementById("container").clientWidth + 20) / (300 + 20)), 1);
    pdS = (document.getElementById("container").clientWidth - catchColumn * 320 + 20) / 2;
    tot = 0;
    sumHeight = toTwoDimensionalArray(catchColumn).map(() => 0); 
    ImageData.forEach(function(item) {
        const minIndex = minValIndex(sumHeight);
        document.getElementsByClassName(`ElainaPic-${item.id}`)[0].style.transform = `translate(${minIndex * (300 + 20) + pdS}px, ${sumHeight[minIndex]}px)`
        sumHeight[minIndex] += item.height + 20; 
    });
};
const debounce = (fn, delay) => {let timer;return function() {if (timer) {clearTimeout(timer);}timer = setTimeout(() => {fn();}, delay);}};
const cancalDebounce = debounce(d, 0);
window.addEventListener('resize', cancalDebounce);

setTimeout(() => {
    catchColumn = Math.max(parseInt((document.getElementById("container").clientWidth + 20) / (300 + 20)), 1);
    pdS = (document.getElementById("container").clientWidth - catchColumn * 320 + 20) / 2;
    tot = 0;
    sumHeight = toTwoDimensionalArray(catchColumn).map(() => 0); 
    ImageData.forEach(function(item) {
        const minIndex = minValIndex(sumHeight);
        document.getElementsByClassName(`ElainaPic-${item.id}`)[0].style.transform = `translate(${minIndex * (300 + 20) + pdS}px, ${sumHeight[minIndex]}px)`
        sumHeight[minIndex] += item.height + 20; 
    });
}, 100);