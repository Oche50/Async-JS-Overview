// ASYNC JAVASCRIPT
function printMe() {
  console.log("print me");
}

function test() {
  console.log("test");
}

setTimeout(printMe, 2000);
test();

function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}

function main() {
  console.log("main");
  setTimeout(f1, 0);
  f2();
}
main();

let promise = new Promise(function (resolve, reject) {
  resolve("I am a resolved promise!");
});
promise.then(function (result) {
  return console.log(result);
});

function ftn1() {
  console.log("ftn1");
}
function ftn2() {
  console.log("ftn2");
}
function mainftn() {
  console.log("mainftn");
  setTimeout(ftn1, 2000);

  let promise = new Promise(function (resolve, reject) {
    resolve("I am a Promise");
  });
  promise.then(function (resolve) {
    console.log(resolve);
  });

  ftn2();
}

mainftn();

// PROMISES

// let promises = new Promise(function (resolve, reject) {
//     let value='water';
//     resolve(value);
// });

// let promiseError = new Promise(function (resolve, reject) {
// reject(new Error('Disaster'))
// })

let promises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("Jack fell down and broke his leg"));
  }, 2000);
  //   resolve(" water");
});
let grandParentsCooking = function () {
  promises.catch(function (resultsError){
    console.log(`OMG! ${resultsError.message}`);
  });
};
grandParentsCooking();

// CALLBACK FUNCTIONS
// Consumer's Phone
orderPizza("veg", "Cheese Barbeque", function (message) {
  console.log(message);
});

//  Pizza Company's End
function orderPizza(name, type, callback) {
  console.log(`pizza ${name} ${type} is ordered`);

  setTimeout(function () {
    const message = `pizza ${name} ${type} is ready`;
    callback(message);
  }, 3000);
}

// PROMISE CHAIN
let promisee = new Promise(function (resolve, reject) {
  reject(new Error("Rejecting a fake promise"));
});

promisee.catch(function (error) {
  console.log(error);
});

// Create a promise to get user information

let getUser = new Promise(function (resolve, reject) {
  let user = {
    name: "Doe",
    email: "doe@example.com",
    password: "password",
    permission: ["db", "hr", "dev"],
  };
  resolve(user);
});
getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);

    // Return another promise to get user address
    // return new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     resolve("Atlanta");
    //   }, 1000);
    // })
    if (user.permission.includes("hr")) {
      throw new Error("You are not allowed");
    }

    return user.email;
  })
  // .then(function (address) {
  //   console.log(`User address: ${address}`);
  // });
  .then(function (emailaddress) {
    console.log(`User email address: ${emailaddress}`);
  })
  .catch(function (error) {
    console.log(error);
  });

let number = new Promise(function (resolve, reject) {
  resolve(19);
});
number
  .then(function (value) {
    value++;

    return value;
  })
  .then(function (value) {
    value += 20;
    return value;
  })
  .then(function (value) {
    value += 10;
    console.log(value);
    return value;
  });

// FINALLY

let Finally = new Promise(function (resolve, reject) {
  resolve("Testing finally");
}).finally(function () {
  console.log('Cleaned up')
})
.then(function (value) {
  console.log(value)
})


