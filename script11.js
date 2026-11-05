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
        return savetoDb("apna college");
    })
    .then (() => {
        console.log("data2 saved successfully");
        return savetoDb("apna college");
    })
    .then (() => {
        console.log("data3 saved successfully");
    })
    .catch(() => {
        console.log("data not saved");
    });