$(document).ready(function(){

//location.reload
function gameStart() {

var bonJovi = {
	name: 'Bon Jovi',
	src: 'assets/images/bonjovi.jpg',
	health: 100,
	strength: 10,
	attack: function(enemyObj){
		enemyObj.hp = enemyObj - strength;
	}
};
document.getElementById('bandA').src='assets/images/bonjovi.jpg';
document.getElementById('bandNameA').innerHTML = bonJovi.name;
document.getElementById('bandAhp').innerHTML = bonJovi.health;

var motleyCrue = {
	name: 'Motley Crue',
	src: "assets/images/motleycrue.jpg",
	health: 125,
	strength: 20,
	attack: function(enemyObj){
		enemyObj.hp = enemyObj - strength;
	}
};
document.getElementById('bandB').src='assets/images/motleycrue.jpg';
document.getElementById('bandNameB').innerHTML = motleyCrue.name;
document.getElementById('bandBhp').innerHTML = motleyCrue.health;

var poison = {
	name: 'Poison',
	src: "assets/images/poison.jpg",
	health: 150,
	strength: 30,
	attack: function(enemyObj){
		enemyObj.hp = enemyObj - strength;
	}
};
document.getElementById('bandC').src='assets/images/poison.jpg';
document.getElementById('bandNameC').innerHTML = poison.name;
document.getElementById('bandChp').innerHTML = poison.health;

var skidRow = {
	name: 'Skid Row',
	src: "assets/images/skidrow.jpg",
	health: 175,
	strength: 40,
	attack: function(enemyObj){
		enemyObj.hp = enemyObj - strength;
	}
};
document.getElementById('bandD').src='assets/images/skidrow.jpg';
document.getElementById('bandNameD').innerHTML = skidRow.name;
document.getElementById('bandDhp').innerHTML = skidRow.health;

$('#hero').hide();
$('#stage').hide();
$('#villain').hide();
}

gameStart();

$('#bandContainerA').on('click', function() {
	$('#bandContainerA').appendTo('#fighter');
	$('#bandContainerB').appendTo('#enemyContainerA');
	$('#bandContainerC').appendTo('#enemyContainerB');
	$('#bandContainerD').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#bandContainerB').on('click', function() {
	$('#bandContainerB').appendTo('#fighter');
	$('#bandContainerA').appendTo('#enemyContainerA');
	$('#bandContainerC').appendTo('#enemyContainerB');
	$('#bandContainerD').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#bandContainerC').on('click', function() {
	$('#bandContainerC').appendTo('#fighter');
	$('#bandContainerA').appendTo('#enemyContainerA');
	$('#bandContainerB').appendTo('#enemyContainerB');
	$('#bandContainerD').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#bandContainerD').on('click', function() {
	$('#bandContainerD').appendTo('#fighter');
	$('#bandContainerA').appendTo('#enemyContainerA');
	$('#bandContainerB').appendTo('#enemyContainerB');
	$('#bandContainerC').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#enemyContainerA').on('click', function() {
	$('#bandContainerA').appendTo('#enemy');
	$('#dressingRoom').hide();
	$('#stage').hide();
	$('#villain').show();
});

$('#enemyContainerB').on('click', function() {
	$('#bandContainerB').appendTo('#enemy');
	$('#dressingRoom').hide();
	$('#stage').hide();
	$('#villain').show();
});

$('#enemyContainerC').on('click', function() {
	$('#bandContainerC').appendTo('#enemy');
	$('#dressingRoom').hide();
	$('#stage').hide();
	$('#villain').show();
});

});