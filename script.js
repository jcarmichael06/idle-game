"use strict";

let count = 0;
let speed = 1;
let clickCount = 1;
let play = false;
let horses = 0;
let reset;
let counter;

display('counter',count);
document.getElementById('add').onclick = function(){add()};
document.getElementById('start').onclick = function(){counter = setInterval(start,1000)};
document.getElementById('stop').onclick = function(){stop()};
document.getElementById('reset').onclick = function(){reset()};
document.getElementById('buy').onclick = function(){buy()};

let start = function(){
	play = true;
	hide('start');
	showInline('stop');
	increment();
	if (count >= 20) showInline('buy');
};

function add(){
	if(play){
		count += clickCount;
		if (count >= 20) showInline('buy');
		display("counter",count);
	}
	else{
		alert("Click start the game to begin play!");
	}

}

function increment(){
	count += speed;
	display('counter',count);
};

function stop(){
	clearInterval(counter);
	play = false;
	hide('stop');
	showButton('start');
}

function buy(){
	count -=20;
	if (count < 20) hide('buy');
	horses++;
	speed++;
	display('counter',count);
	display('horses',`Number of horses: ${horses}`);
	document.getElementById('horses').style.display = "block";
}

reset = function(){
	if (confirm("Are you sure? You will lose all progress?")){
		count = 0;
		speed = 1;
		clickCount = 1;
		horses = 0;
		display('counter',count);
	}
};

function display(id,v){
	return document.getElementById(id).innerHTML = v;
};

function hide(id){
	return document.getElementById(id).style.display = "none";
}

function showInline(id){
	return document.getElementById(id).style.display = "inline";
}

function showBlock(id){
	return document.getElementById(id).style.display = "block";
}