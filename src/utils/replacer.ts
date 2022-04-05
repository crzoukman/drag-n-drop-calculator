export const replacer = (data: string) => {
  let arg = data;
  if (data === 'x') arg = '*';
  if (data === ',') arg = '.';

  return arg;
};