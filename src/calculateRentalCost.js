/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const useTime3Day = 3;
  const useTime3DayDiscount = 20;
  const useTime7Day = 7;
  const useTime7DayDiscount = 50;

  let totalDiscount = 0;

  if (days >= useTime3Day && days <= useTime7Day) {
    totalDiscount = useTime3DayDiscount;
  }

  if (days >= useTime7Day) {
    totalDiscount = useTime7DayDiscount;
  }

  return days * dailyCost - totalDiscount;
}

module.exports = calculateRentalCost;
