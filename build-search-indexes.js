const lunr = require('lunr');
const {readFileSync, writeFileSync} = require('fs');

const documents = JSON.parse(readFileSync('search.json').toString());

const idx = lunr(function () {
  this.ref('id');
  this.field('keywords');

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
});

writeFileSync('static/search-indexes.json', JSON.stringify(idx));
