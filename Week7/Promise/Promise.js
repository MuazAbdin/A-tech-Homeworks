class MyPromise {
  /* Atrributes */
  #status = "pending";
  #value = null;
  #onFulfilledCallbacks = [];
  #onRejectedCallbacks = [];

  /* Constructor */
  constructor(callback) {
    const resolve = (value) => {
      if (this.#status !== "pending") return;
      this.#status = "fulfilled";
      this.#value = value;
      this.#onFulfilledCallbacks.forEach((cb) => cb(value));
    };

    const reject = (error) => {
      if (this.#status !== "pending") return;
      this.#status = "rejected";
      this.#value = error;
      this.#onRejectedCallbacks.forEach((cb) => cb(error));
    };

    try {
      callback(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  /* Private */

  /* Public */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      try {
        switch (this.#status) {
          case "pending":
            this.#onFulfilledCallbacks.push(() => {
              try {
                const fulfilledFromLastPromise = onFulfilled(this.#value);
                if (fulfilledFromLastPromise instanceof MyPromise)
                  fulfilledFromLastPromise.then(resolve, reject);
                else resolve(fulfilledFromLastPromise);
              } catch (error) {
                reject(error);
              }
            });

            this.#onRejectedCallbacks.push(() => {
              try {
                const rejectedFromLastPromise = onRejected(this.#value);
                if (rejectedFromLastPromise instanceof MyPromise)
                  rejectedFromLastPromise.then(resolve, reject);
                else reject(rejectedFromLastPromise);
              } catch (error) {
                reject(error);
              }
            });

            break;
          case "fulfilled":
            const fulfilledFromLastPromise = onFulfilled(this.#value);
            if (fulfilledFromLastPromise instanceof MyPromise)
              fulfilledFromLastPromise.then(resolve, reject);
            else resolve(fulfilledFromLastPromise);
            break;
          case "rejected":
            const rejectedFromLastPromise = onRejected(this.#value);
            if (rejectedFromLastPromise instanceof MyPromise)
              rejectedFromLastPromise.then(resolve, reject);
            else reject(rejectedFromLastPromise);
            break;
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = MyPromise;
