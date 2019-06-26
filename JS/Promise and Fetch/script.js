// new Promise(function (resolve, reject) {
//     setTimeout(function () { resolve(new Date()) }, 5000);
// })
// .then(function (value) {
//     console.log(value)
// });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// for (let i = 0; i < 100; i++) {
//     new Promise(function (resolve) {
//         let id = i;
//         let interval = getRandomInt(0, 500);
//         setTimeout(function() {
//             resolve(id)}, interval);
//         })
//         .then(function(id) {
//             console.log(id);
//         });
// }

// const promiseArray = [];

// for (let i = 0; i < 100; i++) {
//     promiseArray.push(new Promise(function (resolve) {
//         let id = i;
//         let interval = getRandomInt(0, 500);
//         setTimeout(function () {
//             resolve(id)
//         }, interval);
//     }))
// }
// Promise.race(promiseArray).then(function (value) {
//     console.log(value)
// });


const promiseArray = [];

for (let i = 0; i < 100; i++) {
    promiseArray.push(new Promise(function (resolve) {
        let id = i;
        let interval = getRandomInt(0, 500);
        setTimeout(function () {
            resolve(id)
        }, interval);
    }))
}
Promise.all(promiseArray).then(function () {
    console.log('Success!');
});