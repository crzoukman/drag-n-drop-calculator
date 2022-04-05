
export const isValid = (exp: string) => {
  const data = exp.split('');

  for (let i = 0; i < data.length; i++) {
    if (data[i] === '/' && data[i - 1] === '0') return false;
  }

  return true;
};