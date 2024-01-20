const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const isThenable = (obj) => typeof obj?.then === "function";

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);

    this.stack = `(in promise) ${error.stack}`;
  }
}

class MyPromise {
  /* ATTRIBUTES */
  #resolveCbArray = [];
  #rejectCbArray = [];

  #value = null;
  #reason = null;
  #state = STATE.PENDING;

  #resolveFuncBinded = this.#resolveFunc.bind(this);
  #rejectFuncBinded = this.#rejectFunc.bind(this);

  /* CONSTRUCTOR */
  constructor(executor) {
    try {
      executor(this.#resolveFuncBinded, this.#rejectFuncBinded);
    } catch (error) {
      this.#rejectFunc(error);
    }
  }

  /* PRIVATE */
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#resolveCbArray.forEach((cb) => cb(this.#value));
      this.#resolveCbArray = [];
    }
    if (this.#state === STATE.REJECTED) {
      this.#rejectCbArray.forEach((cb) => cb(this.#reason));
      this.#rejectCbArray = [];
    }
  }

  #resolveFunc(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (isThenable(value)) {
        value.then(this.#resolveFuncBinded, this.#rejectFuncBinded);
        return;
      }
      this.#state = STATE.FULFILLED;
      this.#value = value;
      this.#runCallbacks();
    });
  }

  #rejectFunc(reason) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (isThenable(reason)) {
        reason.then(this.#resolveFuncBinded, this.#rejectFuncBinded);
        return;
      }

      // there is an error but no reject func to handle it: new MyPromise("sfs").catch()
      if (this.#rejectCbArray.length === 0) {
        throw new UncaughtPromiseError(reason);
      }

      this.#state = STATE.REJECTED;
      this.#reason = reason;
      this.#runCallbacks();
    });
  }

  /* PUBLIC */
  then(fnOnResolve, fnOnReject) {
    return new MyPromise((resolve, reject) => {
      this.#resolveCbArray.push((value) => {
        if (!fnOnResolve) {
          resolve(value);
          return;
        }
        try {
          resolve(fnOnResolve(value));
        } catch (error) {
          reject(error);
        }
      });

      this.#rejectCbArray.push((reason) => {
        if (!fnOnReject) {
          reject(reason);
          return;
        }
        try {
          resolve(fnOnReject(reason));
        } catch (error) {
          reject(error);
        }
      });

      this.#runCallbacks();
    });
  }

  catch(fnOnReject) {
    return this.then(null, fnOnReject);
  }

  finally(cb) {
    return this.then(
      (value) => {
        cb();
        return value;
      },
      (reason) => {
        cb();
        throw reason;
      }
    );
  }

  /* STATIC FUNCTIONS */
  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
  static all(iterable) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve, reject) => {
      iterable.forEach((p, i) => {
        p.then((value) => {
          results[i] = value;
          if (++completedPromises === iterable.length) resolve(results);
        }).catch(reject);
      });
    });
  }
  static allSettled(iterable) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve, reject) => {
      iterable.forEach((p, i) => {
        p.then((value) => {
          results[i] = { status: STATE.FULFILLED, value };
        })
          .catch((reason) => {
            results[i] = { status: STATE.REJECTED, reason };
          })
          .finally(() => {
            if (++completedPromises === iterable.length) resolve(results);
          });
      });
    });
  }
  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      iterable.forEach((p) => p.then(resolve).catch(reject));
    });
  }
  static any(iterable) {
    const errors = [];
    let rejectedPromises = 0;
    return new MyPromise((resolve, reject) => {
      iterable.forEach((p, i) => {
        p.then(resolve).catch((reason) => {
          errors[i] = reason;
          if (++rejectedPromises === iterable.length)
            reject(new AggregateError(errors, "All promises were rejected"));
        });
      });
    });
  }
}

module.exports = MyPromise;
