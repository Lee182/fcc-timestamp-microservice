# fcc-timestamp-microservice
nodejs time convertor service as part of [free code camp](https://www.freecodecamp.com/challenges/timestamp-microservice) curriculum.

## GET http://locahost:3000/natural_date
```GET http://locahost:3000/January 1, 2015```

Given that the string after is in the date syntax
`Month MonthDate, Year`
the response is
```javascript
{
  natural: 'January 1, 2015',
  unix: 1420070400000
}
```

## GET http://locahost:3000/unix_date
Likewise
```GET http://locahost:3000/1420070400000```
response is
```javascript
{
  natural: 'January 1, 2015',
  unix: 1420070400000
}
```
