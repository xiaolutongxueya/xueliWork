//轮播图
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-1200*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-1200*index},function(){
		if(index==6){
			slider.style.left = '-1200px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-1200*index},function(){
		if(index==0){
			slider.style.left = '-6000px';
			index = 5;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >5 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[4].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

//登录界面
var login = document.getElementById('login');
var bigbig = document.getElementById('bigbig');
var subbb = document.getElementById('subbb');
var yong = document.getElementById('yong');
var mi = document.getElementById('mi');
login.onclick = function(){
	log.style.display = 'block';
	bigbig.style.display = 'none';
}
subbb.onclick = function(){
	yong.value = "";
	mi.value = "";
	log.style.display = 'none';
	bigbig.style.display = 'block';
}

//返回顶部
var top = document.getElementById('top');
top.onclick = function(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}