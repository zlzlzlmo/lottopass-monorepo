export const getRandomNum = (from: number, to: number): number => {
  if (from > to) {
    throw new Error('`from` must be less than or equal to `to`');
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
