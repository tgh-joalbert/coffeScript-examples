// Generated by CoffeeScript 1.12.5
(function() {
  var eventNumbers, number, person, prop, tt, value;

  this.generate_random_number = function() {
    return document.getElementById('elemento').textContent = Math.random() * 6;
  };

  tt = (function() {
    var i, results;
    results = [];
    for (number = i = 1; i <= 10; number = ++i) {
      results.push(number);
    }
    return results;
  })();

  console.log(tt);

  eventNumbers = (function() {
    var i, results;
    results = [];
    for (number = i = 1; i <= 10; number = ++i) {
      if (number % 2 === 0) {
        results.push(number);
      }
    }
    return results;
  })();

  console.log(eventNumbers);

  person = {
    name: 'Joalbert',
    married: false,
    age: 28,
    favorite_colors: ['blue', 'back', 'green']
  };

  person.score = 100;

  for (prop in person) {
    value = person[prop];
    console.log(prop + " has a value " + value);
  }

}).call(this);