# fcc-timestamp-microservice
nodejs time convertor service as part of [free code camp](https://www.freecodecamp.com/challenges/timestamp-microservice) curriculum.
## install and start
```
$ npm install
$ npm start
```

## GET http://locahost:3000/natural_date
```GET http://locahost:3000/January 1, 2015```

Given that the string after is in the date syntax
`Month MonthDate, Year`
the response is
```javascript
{
  unix: 1420070400000
  natural: 'January 1, 2015',
}
```

## GET http://locahost:3000/unix_date
Likewise
```GET http://locahost:3000/1420070400000```
response is
```javascript
{
  unix: 1420070400000
  natural: 'January 1, 2015',
}
```

## Invalid Date
If the date isnt in format 'Month MonthDate, Year' or unix time since 1970, the server will return
```javascript
{
  unix: null,
  natural: null
}
```
