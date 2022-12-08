export const handleCalculation = (chickenData) => {
  const result = chickenData.weight - chickenData.targetWeight;
  return result;
};
