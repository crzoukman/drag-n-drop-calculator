
export const rounder = (res: number | string) => {
  if (typeof res === 'number') {
    const str = String(res);

    if (str.length >= 18) {
      return res.toExponential(4).substring(0, 18);
    }

    return res;
  }

  return res;
}