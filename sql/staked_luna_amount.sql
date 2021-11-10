WITH staked_luna_balances as (
  SELECT ADDRESS, AVG(BALANCE) as AMOUNT FROM terra.daily_balances
  WHERE BALANCE_TYPE  = 'staked'
  AND CURRENCY = 'LUNA'
  AND (DATE >= CURRENT_DATE OR DATE >= CURRENT_DATE - 1)
  GROUP BY ADDRESS
)

SELECT * FROM staked_luna_balances
WHERE AMOUNT > 0