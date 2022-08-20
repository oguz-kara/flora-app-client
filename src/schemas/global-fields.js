const requiredField = 'This field is required!';
const stringField = 'Must be string!';
const numberField = 'Must be number!';
const mustPositive = 'Must be positive number!';
const mustInteger = 'Must be integer value!';

const getStringRestraint = (amount, text) => {
  return `Field must be ${text} ${amount} characters!`;
};

const getNumberRestraint = (amount, text) => {
  return `Field value must be ${text} ${amount}!`;
};

export const name = {
  string: [stringField],
  min: [2, getStringRestraint(2, 'minimum')],
  max: [50, getStringRestraint(50, 'maximum')],
  required: [requiredField],
};

export const description = {
  string: [stringField],
  min: [30, getStringRestraint(30, 'minimum')],
  max: [2048, getStringRestraint(2048, 'maximum')],
  required: [requiredField],
};

export const phoneNumber = {
  string: [stringField],
  min: [10, getStringRestraint(10, 'minimum')],
  max: [11, getStringRestraint(11, 'maximum')],
  required: [requiredField],
};

export const money = {
  number: [numberField],
  min: [0, getNumberRestraint(0, 'minimum')],
  max: [1000000000000, getNumberRestraint(1000000000000, 'maximum')],
  required: [requiredField],
  positive: [mustPositive],
};

export const amount = {
  number: [numberField],
  min: [0, getNumberRestraint(0, 'minimum')],
  max: [1000000000000, getNumberRestraint(1000000000000, 'maximum')],
  required: [requiredField],
  positive: [mustPositive],
};

export const barcode = {
  string: [stringField],
  min: [13, getStringRestraint(13, 'minimum')],
  max: [13, getStringRestraint(13, 'maximum')],
};

export const sku = {
  string: [stringField],
  min: [6, getStringRestraint(6, 'minimum')],
  max: [6, getStringRestraint(6, 'maximum')],
  required: [requiredField],
};

export const idNumber = {
  number: [numberField],
  min: [1, getNumberRestraint(1, 'minimum')],
  max: [1000000000000, getNumberRestraint(1000000000000, 'maximum')],
  positive: [mustPositive],
  integer: [mustInteger],
};

export const percentage = {
  number: [numberField],
  min: [0, getNumberRestraint(0, 'minimum')],
  max: [1000000000000, getNumberRestraint(1000000000000, 'maximum')],
  positive: [mustPositive],
};
