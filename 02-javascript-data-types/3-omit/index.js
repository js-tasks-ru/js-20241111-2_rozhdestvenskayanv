/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObj = {};

  for (const key of Object.keys(obj)) {
    let notEqual = true;

    for (const field of fields) {
      if (key === field) {
        notEqual = false;
      }
    }

    if (notEqual) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
