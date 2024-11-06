const findDiff = (data1, data2) => {
  const result = {};
  const allKeys = new Set([...Object.keys(data1), ...Object.keys(data2)]);
  const sortedKeys = [...allKeys].sort((keyA, keyB) => keyA.localeCompare(keyB));
  const allSortedKeys = new Set(sortedKeys);
  allSortedKeys.forEach((key) => {
    if (!(key in data2)) {
      result[`- ${key}`] = data1[key];
    } else if (!(key in data1)) {
      result[`+ ${key}`] = data2[key];
    } else if (data1[key] !== data2[key]) {
      result[`- ${key}`] = data1[key];
      result[`+ ${key}`] = data2[key];
    } else {
      result[key] = data1[key];
    }
  });

  return JSON.stringify(result, null, 2);
};

export default findDiff;
