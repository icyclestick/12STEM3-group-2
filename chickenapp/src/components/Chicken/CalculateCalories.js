export const handleCalculation = (chickenData) => {
  const result1 = chickenData.finalWeight - chickenData.initWeight;
  const resultFinal = chickenData.calorieAte / result1;
  return resultFinal;
};
