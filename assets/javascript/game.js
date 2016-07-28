$(document).ready(function(){
var bonJovi
var motleyCrue
var poison
var skidRow
var player
var enemy
var gameOver = true;

function gameStart() {

gameOver = false;
bonJovi = {
	name: 'Bon Jovi',
	picture: '<img src="assets/images/bonjovi.jpg">',
	health: 100,
	strength: 25,
	attack: function(enemyObj){
		enemyObj.health = enemyObj.health - bonJovi.strength;
		$('#bandAhp').html(bonJovi.health);
	}
};

document.getElementById('bandA').src='assets/images/bonjovi.jpg';
//$('#bandA').html(bonJovi.picture);
$('#bandNameA').html(bonJovi.name);
$('#bandAhp').html("Health: " + bonJovi.health);
// $('#bandContainerA').html(bonJovi.name + bonJovi.picture + bonJovi.health);

motleyCrue = {
	name: 'Motley Crue',
	picture: '<img src="assets/images/motleycrue.jpg">',
	health: 125,
	strength: 10,
	attack: function(enemyObj){
		enemyObj.health = enemyObj.health - motleyCrue.strength;
		$('#bandBhp').html(motleyCrue.health);
	}
};
document.getElementById('bandB').src='assets/images/motleycrue.jpg';
//$('#bandB').html(motleyCrue.picture);
$('#bandNameB').html(motleyCrue.name);
$('#bandBhp').html("Health: " + motleyCrue.health);

poison = {
	name: 'Poison',
	picture: '<img src="assets/images/poison.jpg">',
	health: 150,
	strength: 15,
	attack: function(enemyObj){
		enemyObj.health = enemyObj.health - poison.strength;
		$('#bandChp').html(poison.health);
	}
};
document.getElementById('bandC').src='assets/images/poison.jpg';
//$('#bandC').html(poison.picture);
$('#bandNameC').html(poison.name);
$('#bandChp').html("Health: " + poison.health);

skidRow = {
	name: 'Skid Row',
	picture: '<img src="assets/images/skidrow.jpg">',
	health: 175,
	strength: 20,
	attack: function(enemyObj){
		enemyObj.health = enemyObj.health - skidRow.strength;
		$('#bandDhp').html(skidRow.health);
	}
};
document.getElementById('bandD').src='assets/images/skidrow.jpg';
//$('#bandD').html(skidRow.picture);
$('#bandNameD').html(skidRow.name);
$('#bandDhp').html("Health: " + skidRow.health);

$('#hero').hide();
$('#stage').hide();
$('#villain').hide();
$('#button').hide();
$('#replay').hide();
$('#next').hide();
};

gameStart();

$('#bandContainerA').on('click', function() {
	//$('#player').html(bonJovi.name, bonJovi.picture, bonJovi.health);
	player = bonJovi;
	$('#bandContainerA').off('click');
	$('#bandContainerB').off('click');
	$('#bandContainerC').off('click');
	$('#bandContainerD').off('click');
	$('#bandContainerA').appendTo('#player');
	$('#bandContainerB').appendTo('#enemyContainerA');
	$('#bandContainerC').appendTo('#enemyContainerB');
	$('#bandContainerD').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#bandContainerB').on('click', function() {
	player = motleyCrue;
	$('#bandContainerA').off('click');
	$('#bandContainerB').off('click');
	$('#bandContainerC').off('click');
	$('#bandContainerD').off('click');
	$('#bandContainerB').appendTo('#player');
	$('#bandContainerA').appendTo('#enemyContainerA');
	$('#bandContainerC').appendTo('#enemyContainerB');
	$('#bandContainerD').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#bandContainerC').on('click', function() {
	player = poison;
	$('#bandContainerA').off('click');
	$('#bandContainerB').off('click');
	$('#bandContainerC').off('click');
	$('#bandContainerD').off('click');
	$('#bandContainerC').appendTo('#player');
	$('#bandContainerA').appendTo('#enemyContainerA');
	$('#bandContainerB').appendTo('#enemyContainerB');
	$('#bandContainerD').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#bandContainerD').on('click', function() {
	player = skidRow;
	$('#bandContainerA').off('click');
	$('#bandContainerB').off('click');
	$('#bandContainerC').off('click');
	$('#bandContainerD').off('click');
	$('#bandContainerD').appendTo('#player');
	$('#bandContainerA').appendTo('#enemyContainerA');
	$('#bandContainerB').appendTo('#enemyContainerB');
	$('#bandContainerC').appendTo('#enemyContainerC');
	$('#backstage').hide();
	$('#hero').show();
	$('#stage').show();
});

$('#enemyContainerA').on('click', function() {
		if (player = bonJovi){
			enemy = motleyCrue;
		}
		else {
			enemy = bonJovi;
		}
	$('#enemyContainerA').off('click');
	$('#enemyContainerB').off('click');
	$('#enemyContainerC').off('click');
	$('#enemyContainerA').appendTo('#enemy');
	$('#enemyContainerB').appendTo('#nextEnemyA');
	$('#enemyContainerC').appendTo('#nextEnemyB');
	$('#dressingRoom').hide();
	$('#stage').hide();
	$('#villain').show();
	$('#button').show();
});

$('#enemyContainerB').on('click', function() {
		if (player = motleyCrue) {
			enemy = poison;
		}
		else {
			enemy = motleyCrue;
		}
	$('#enemyContainerA').off('click');
	$('#enemyContainerB').off('click');
	$('#enemyContainerC').off('click');
	$('#enemyContainerB').appendTo('#enemy');
	$('#enemyContainerA').appendTo('#nextEnemyA');
	$('#enemyContainerC').appendTo('#nextEnemyB');
	$('#dressingRoom').hide();
	$('#stage').hide();
	$('#villain').show();
	$('#button').show();
});

$('#enemyContainerC').on('click', function() {
		if (player = poison) {
			enemy = skidRow;
		}
		else {
			enemy = poison;
		}
	$('#enemyContainerA').off('click');
	$('#enemyContainerB').off('click');
	$('#enemyContainerC').off('click');
	$('#enemyContainerC').appendTo('#enemy');
	$('#enemyContainerA').appendTo('#nextEnemyA');
	$('#enemyContainerB').appendTo('#nextEnemyB');
	$('#dressingRoom').hide();
	$('#stage').hide();
	$('#villain').show();
	$('#button').show();
});

$('#battleButton').on('click', function() {
	player.attack(enemy);
	player.strength = player.strength + 4;
	enemy.attack(player);
	$('#stats').html("You have hit your enemy for a loss of " + player.strength + " points.<br>" + "You have been hit for a loss of " + enemy.strength + " points.")


	if (player.health < 1) {
		$('#button').hide();
		$('#stats').hide();
		$('#replay').show();
		$('#restart').on('click', function() {
			gameOver = true;
			location.reload
		})
	}

	if (enemy.health < 1) {
		$('#next').show();
		$('#villain').hide();
		$('#stats').hide();
	}
	
});


 $('#nextEnemyA').on('click', function() {
  	$('#nextEnemyA').appendTo('#enemy');
	// if (player = motleyCrue && enemy = poison || player = poison && enemy = Motley Crue) {
	// 	enemy = bonJovi;
	// }
	// if (player = bonJovi && enemy = motleyCrue || player = motleyCrue && enemy = bonJovi) {
	// 	enemy = poison;
	// }
	// if (player = bonJovi && enemy = poison || player = poison && enemy = bonJovi) {
	// 	enemy = motleyCrue;
	// }
	$('#nextEnemyA').off('click');
	$('#nextEnemyB').off('click');
	$('#next').hide();


 });
 $('#nextEnemyB').on('click', function() {
 	$('#nextEnemyB').appendTo('enemy');
	// if (player = motleyCrue && enemy = poison || player = poison && enemy = Motley Crue) {
	// 	enemy = skidRow;
	// }
	// if (player = skidRow && enemy = motleyCrue || player = motleyCrue && enemy = skidRow) {
	// 	enemy = poison;
	// }
	// if (player = skidRow && enemy = poison || player = poison && enemy = skidRow) {
	// 	enemy = motleyCrue;
	// }
	$('#nextEnemyA').off('click');
	$('#nextEnemyB').off('click');
	$('#next').hide();

});

});