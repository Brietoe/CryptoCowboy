export type Configuration =
  {
    range: number;      //  Percentage (in decimal) for upper and lower limits on trade orders
    fixedPoint: number; //  Total value of all counterparty asset with respect to prime asset
    balance: number;    //  The quantity of counterparty assetsbeing traded
  };

export default function CryptoCowboy(configuration: Configuration)
{
  const { fixedPoint, range, balance } = configuration;

  const delta = fixedPoint * range;

  function Order(value: number)
  {
    const price = value / balance;
    const quantity = delta / price;
    return { quantity, price };
  }

  const sell = Order(fixedPoint + delta);
  const buy = Order(fixedPoint - delta);
  return { sell, buy };
}