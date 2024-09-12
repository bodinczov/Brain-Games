export const getRandomInRange = (min = 0, max = 100) => {
    return Math.floor(min + Math.random() * (max - min + 1));
  };
  