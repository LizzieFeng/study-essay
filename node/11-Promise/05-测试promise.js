const promise = new Promise((resolve) => {
    resolve("5")
}).then().then((data) => {console.log(data)})