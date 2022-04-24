
  100 XRP
  Total value: 100 XRP

  lets assume that 1 xrp == 1 usd
  So, we must buy into some 'risk' by purchasing some other asset.
  We will purchase 50 'USD tokens' using 50 of our XRP.

  New balances:
  50 XRP
  50 USD GH tokens
  Total value: 100 XRP

  Range: 10%

  We expect the value of our counterpary asset to move up or down by at least 10%

  We expect the value of the USD token to either eventually become worth 1.1 XRP
  or
  We expect the value of the USD token to eventually become worth 0.9 XRP


  So, we have two cases when using bot:
    Case 1 (USD becomes worth 1.1 XRP):
      Currently own:
        50 XRP  - 50 XRP
        50 USD  - 50 * 1.1 XRP = 55 XRP
        Total value: 50 + 55 = 105 XRP
        or
        Total value: 50 + (50 / 1.1) = 50 + 45.45 = 95.45 USD
        105 XRP or 95.45 USD

    Case 2 (USD becomes worth 0.90 XRP):
      Currently own:
        50 XRP - 50 XRP
        50 USD - 50 * 0.9 XRP = 45 XRP
        Total value: 50 + 45 = 95 XRP
        or
        Total value: 50 + (50 / 0.9) = 50 + 55.55 = 105.55 USD
        95 XRP or 105.55 USD

  Or we can have two cases when Holdling:
    Case 1 (USD becomes worth 1.1 XRP):
      Currently own:
        100 XRP  - 100 XRP
        Total value: 100 XRP
        or
        Total value: 90.91 USD

    Case 2 (USD becomes worth 0.90 XRP):
      Currently own:
        100 XRP - 100 XRP
        Total value: 100 XRP
        or
        Total value: 111.11 USD

  2^2 posibilities

  Using bot:
    USD Price increase:
      105 XRP or 95.45 USD
    USD price decrease:
      95 XRP or 105.55 USD

  Not using bot:
    USD Price increase:
      100 XRP or 90.91 USD
    USD price decrease:
      100 XRP or 111.11 USD

  Fundamental Axioms:
    Asset you invest in must not indefinetly approach zero value.
    The asset you invest in must have volatility.
    You must be able to wait however long it takes for the value of your portfolio to increase.

  Gain - Profit made on a trade pair
  Trade pair - a dual trade offer to execute a trade where one order will execute if the price goes up and the other order will
    execute if the price goes down.

  Fixed point: Total value of our counterparty asset with respect to our base asset

  100 XRP
  Purchase 50 USD @1.00 XRP/USD
  50 USD, 50 XRP
  Fixed point: 50 - Why? Because 50 USD(counterparty asset) is worth 50 XRP(prime asset)

  When USD = @0.9 XRP/USD
  What is the value of our counterparty asset?
  50 * 0.9 = 45 XRP
  So we must purchase:
    (fixed point) - (total counterparty asset value) = 50 XRP - 45 XRP = 5 XRP
    We must purchase 5 XRP worth of USD.

  Okay, we have 50/50 split, we need to purchase 5 XRP worth of USD to re-align.
  Let buy 5.56 more USD for 5 XRP.

  50 - 5 = 45 XRP
  50 + 5.56 = 55.56 USD

  Total value in XRP: 45 + 55.56 * 0.9 = 95 XRP
  Total value in USD: 55.56 + 45 / 0.9 = 105.56 USD

  Let's say the price returns back to our starting value of 1.000 XRP / USD
  45 XRP
  55.56 USD

  Total value in XRP:  45 + 55.56 = 100.56 XRP
  Total value in USD: 55.56 + 45 = 100.56 USD

  TP = (#T) / 2
  RP * RP * FP * #TP
  FP:50
  RP:0.1
  Gain: 50 * 0.1 * 0.1 * 1 = 0.5
  Gain / FP = 0.5 = 50 = 1%
