const nameRegex = /^[a-zA-Z]{3,}$/;

const isValid = (value: string, regex: RegExp) => {
  return regex.test(value);
};

export const Validation = {
  isValid,
};

export const Regex = {
  name: nameRegex,
};
