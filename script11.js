//Setting up promise
// function savetoDb(data, success, failure) {
//     let networkSpeed = Math.floor(Math.random() * 10) + 1;
//     if(networkSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// };

// savetoDb("apna college", () => {
//     console.log("data saved successfully");
//     savetoDb("another data", () => {
//         console.log("data2 saved successfully");
//         savetoDb("new data", () => {
//             console.log("data3 saved successfully");
//         }, () => {
//             console.log("data3 not saved");
//         })
//     }, () => {
//         console.log("data2 not saved");
//     })
// }, () => {
//     console.log("data not saved");
// });

//Promise
function savetoDb(data) {
    return new Promise((resolve, reject) => {
    let networkSpeed = Math.floor(Math.random() * 10) + 1;
    if(networkSpeed > 4) {
        resolve();
    } else {
        reject();
    }
    });
};

savetoDb("apna college")
    .then (() => {
        console.log("data saved successfully");
    })
    .catch(() => {
        console.log("data not saved");
    });