h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve()
    }, delay);
    });
};

changeColor('red', 1000)
.then(() => {
    console.log('color changed to red');
    return changeColor('green', 1000);
})
.then(() => {
    console.log('color changed to green');
    return changeColor('blue', 1000);
})
.then(() => {
    console.log('color changed to blue');
    return changeColor('orange', 1000);
})
.then(() => {
    console.log('color changed to orange');
});