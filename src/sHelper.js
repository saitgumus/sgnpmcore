/**
 * is value null or empty
 */
const isNullOrEmpty = (value) => {
  return !value || value === "" ? true : false;
};

/**
 * is valid number
 * @param {number} value
 * @returns
 */
const isValidNumber = (value) => {
  return isNaN(value) ? false : true;
};

module.exports = {
  isNullOrEmpty,
  isValidNumber,
};
