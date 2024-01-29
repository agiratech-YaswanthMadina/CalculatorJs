const countValue = -9;
const myPromise = new Promise(function (resolve, reject) {
    if (countValue > 0) {
        resolve("The count value is positive.");
    } else {
        reject("Negative count value!");
    }
});
myPromise.then(resolve => console.log(resolve))
    .catch(err => console.log(err))
    .finally(() => {
        console.log('Result Received!');
    });


// fetch("https://catfact.ninja/fact")
//   .then(function(fact) {
//     console.log("Fetched Fact: ", fact);
//   })
//   .catch(function(error) {
//      console.error(error);
//   });