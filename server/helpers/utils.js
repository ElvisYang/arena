export default {
  promiseWhile: (initialData, condition, action) => {
    const whilst = data => (condition(data) ?
      action(data).then(whilst) :
      Promise.resolve(data));
    return whilst(initialData);
  },
};
