var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');

function rossTemplate(data){
  var source = $('#friendsPlayers').html();
  var template = handlebars.compile(source);
  var compiledTemplate = template(data);
  $('.rossPlayersList').html(compiledTemplate);
}

function Player(options){
  options = options || {};
  this.health = options.health || 100;
  this.name = options.name;
}

Player.prototype.takeDamage = function(){
  this.health = this.health - 10;
};


var playerRoss;
var playerRachel;

$('.attack-button').on('click', function(){
  playerRoss.takeDamage();
  playerRachel.takeDamage();
  $('.rachel .health').text(playerRachel.health);
  $('.ross .health').text(playerRoss.health);
});

var rossPlayers = [{name: 'Red Ross'}, {name: 'Unami Ross'}, {name: 'Drunk Ross'}];
rossTemplate(rossPlayers);

$('.startbutton').on('click', function(){
  var selectedross = $('.rossPlayersList').val();
  console.log(selectedross);
  playerRoss = new Player({health: 95, name: selectedross});
  $('.selectedross').append(selectedross);

  var rachelPlayers = [{name: 'Rachel'}, {name: 'Rachel'}, {name: 'Rachel'}];
  var player = _.random(0, rachelPlayers.length - 1);
  playerRachel = new Player({health: 100});


});
