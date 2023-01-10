export const data = [
  {
    name: 'Celsius',
    prefix: '°C',
    sufix: '°F',
    output: 'To Fahrenheit:',
    min: -273.15,
    method: function (input) {return ((input * 9 / 5) + 32).toFixed(2)},
  },
  {
    name: 'Fahrenheit',
    prefix: '°F',
    sufix: '°C',
    output: 'To Celsius:',
    min: -459.67,
    method: function (input){return ((input - 32) * 5 / 9).toFixed(2)},
  },
  {
    name: 'Ounces',
    prefix: 'oz',
    sufix: 'gr',
    output: 'To grams:',
    min: 0,
    method: function (input) {return (input * 28.3495).toFixed(4)},
  },
  {
    name: 'Grams',
    prefix: 'gr',
    sufix: 'oz',
    output: 'To ounces:',
    min: 0,
    method: function (input) {return (input / 28.3495).toFixed(4)},
  },
];