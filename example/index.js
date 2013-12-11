var express   = require('express'),
    http      = require('http'),
    madmen    = require('../lib'),
    mongoose  = require('mongoose'),
    app       = express();

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

mongoose.connect('mongodb://localhost/madmen_example');

var db = mongoose.connection;
db.once('open',function(){
  var kitten1 = new Kitten({name: 'Ninja'}),
      kitten2 = new Kitten({name: 'Captain Mittens'}),
      kitten3 = new Kitten({name: 'Charimain Meow'});
  kitten1.save();
  kitten2.save();
  kitten3.save();
});

app.configure(function(){
  app.set('view engine', 'jade');
});

app.use('/admin', madmen({
  '/kittens' : 'Kitten'
}));

var server = http.createServer(app);
server.listen(3001, function(){
  console.log('Express server listening on port 3001');
});