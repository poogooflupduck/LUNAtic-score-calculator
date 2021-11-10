WITH pylon_deposits as (
  SELECT msg_value : sender as ADDRESS, COUNT(DISTINCT TX_ID) AS COUNT FROM terra.msgs
  WHERE msg_value : contract = 'terra1z5j60wct88yz62ylqa4t8p8239cwx9kjlghkg2' -- Pylon core
  AND msg_value : execute_msg : deposit IS NOT NULL
  AND TX_STATUS = 'SUCCEEDED'
  GROUP BY ADDRESS
)

SELECT LTRIM(ADDRESS) AS ADDRESS, COUNT FROM pylon_deposits