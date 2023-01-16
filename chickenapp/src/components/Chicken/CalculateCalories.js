export const handleCalculation = (chickenData) => {
  const result = chickenData.initWeight - chickenData.finalWeight;
  return result;
};
