function savetoDb(data) {
    return new Promise((resolve, reject) => {
    let networkSpeed = Math.floor(Math.random() * 10) + 1;
    if(networkSpeed > 4) {
        resolve("success: data saved");
    } else {
        reject("error: data not saved");
    }
    });
};

savetoDb("apna college")
    .then ((result) => {
        console.log("data saved successfully");
        console.log(result);
        return savetoDb("apna college");
    })
    .then ((result) => {
        console.log("data2 saved successfully");
        console.log(result);
        return savetoDb("apna college");
    })
    .then ((result) => {
        console.log("data3 saved successfully");
        console.log(result);
    })
    .catch((error) => {
        console.log("data not saved due to network error");
        console.log(error);
    });