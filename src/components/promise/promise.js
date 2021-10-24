/*Create promsie*/
const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hi i am from promise 1`));
    }, 3000);
  });
};
const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hi i am from promise 2`));
    }, 1000);
  });
};
const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hi i am from promise 3`));
    }, 5000);
  });
};

// Promise chaining ( promise3, promise2, promise1)
promise3()
  .then((res) => res)
  .then(promise2)
  .then((res) => res)
  .then(promise1)
  .then((res) => res)
  .catch((err) => err);

/*-------------------------------
 //async awiat 
 --------------------------------*/
const promise11 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hi i am from promise 11`));
    }, 3000);
  });
};
const promise12 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hi i am from promise 12`));
    }, 1000);
  });
};
const promise13 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hi i am from promise 13`));
    }, 5000);
  });
};
