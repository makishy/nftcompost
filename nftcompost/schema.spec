/addresses: wallet address
  deviceId: iot device id (or address) (* to be array in future)
  point: aggregated point(exchangeable for token )
  tokens: own tokens

/devices: iot device id
  logs: device sensing log
    amountOfWater
    microorganism
    nutrientSource
    temperature
  point: aggregated point from logs
    amountOfWaterPoint
    microorganismPoint
    nutrientSourcePoint
    temperaturePoint

/token
  totalSupply
  remain

