import ora from "ora";

function wrapLoading(fn, message, ...args) {
  return new Promise(async (resolve, reject) => {
    const spinner = ora(message);
    try {
      spinner.start();
      const data = await fn(...args);
      spinner.stop();
      resolve(data);
    } catch (e) {
      spinner.fail("fetch failed, refetching ...");
      await sleep(2000);
      wrapLoading(fn, message, ...args);
    }
  });
}

function sleep(timer) {
  return new Promise((resolve) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve();
    }, timer);
  });
}

export { wrapLoading };
