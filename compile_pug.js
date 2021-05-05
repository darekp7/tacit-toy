const pug = require('pug');
const fs = require('fs');

// Compile the source code
const compiledFunction = pug.compileFile('index.pug', {pretty: true});

/*
// Render a set of data
console.log(compiledFunction({
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  name: 'Forbes'
}));
// "<p>Forbes's Pug source code!</p>"
*/

let data = compiledFunction({
  name: 'Timothy'
});


console.log('Próbuję zapisać');

fs.writeFile('index.html', data, 'utf8', function (err) {
  if (err) return console.log(err);
  console.log('Zapisano do pliku');
});