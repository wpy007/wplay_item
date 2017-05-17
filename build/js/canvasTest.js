'use strict';

window.onload = function () {
	var c = document.getElementById('myCanvas');

	// 画一条线
	var ctx = c.getContext('2d');
	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();

	//  背景渐变
	var ctx4 = c.getContext('2d');
	var grd = ctx.createLinearGradient(0, 0, 200, 0);
	grd.addColorStop(0, 'red');
	grd.addColorStop(1, 'white');
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, 200, 200);

	// 圆
	var ctx1 = c.getContext('2d');
	ctx1.beginPath();
	ctx1.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx1.stroke();

	//  实心字
	var ctx2 = c.getContext('2d');
	ctx2.font = '30px 宋体';
	ctx2.fillText('Hello Wplay', 10, 50);

	//  空心字
	var ctx3 = c.getContext('2d');
	ctx3.font = '30px 微软雅黑';
	ctx3.strokeText('hey PWT', 30, 150);
};