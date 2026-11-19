# truck-weather

## Endpoint
https://api.open-meteo.com/v1/forecast  (Open-Meteo, GET)

## What I changed using the docs
I added `&timezone=auto&wind_speed_unit=mph`.
Before: windspeed was in km/hr and time was gmt
After: windspeed is now in mph. and time is now local

## Live site
https://alexsfamurri.github.io/truck-weather/