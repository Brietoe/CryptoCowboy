import CryptoCowboy, { Configuration } from "./CryptoCowboy.js";

const configuration: Configuration =
{
  fixedPoint: 50, //  The net value of your counterparty assets with respect to the prime asset
  range: 0.1,     //  Percentage for upper and lower limits on trade executions
  balance: 50     //  The quantity of counterparty assets you're trading with
};

const result = CryptoCowboy(configuration);

console.log(result);