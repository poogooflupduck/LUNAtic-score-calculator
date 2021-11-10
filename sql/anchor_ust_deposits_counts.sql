WITH ust_deposits as (
  SELECT msg_value : sender as ADDRESS, COUNT(DISTINCT TX_ID) AS COUNT FROM terra.msgs
  WHERE msg_value : contract = 'terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s' -- Anchor market
  AND msg_value : execute_msg : deposit_stable IS NOT NULL
  AND msg_value : coins IS NOT NULL
  GROUP BY ADDRESS
)

SELECT LTRIM(ADDRESS) AS ADDRESS, COUNT FROM ust_deposits u
WHERE COUNT >= 0