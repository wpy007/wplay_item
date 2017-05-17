'use strict';

$(function () {
	$('#container').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'My first Highcharts chart'
		},
		xAxis: {
			categories: ['苹果', '香蕉', '橙子'] //指定x轴分组
		},
		yAxis: {
			title: {
				text: 'something'
			},
			labels: {
				enabled: true,
				step: 2
			}
		},
		series: [{ //指定数据列
			name: '小明', //数据列名
			data: [1, 2, 4] //数据
		}, {
			name: '小红',
			data: [5, 7, 3]
		}]
	});

	$('#scrollBox').scroll(function (e) {
		var that = $('.scroll_box')[0];
		//return1() == 3 ? return : '';  //这样子会报错的
		var res = return1; // 这样子的res是一个函数了，想要它的return值，就写return1()
		if (res == 1) {
			return false;
		}
		alert(1);
	});

	function return1() {
		return 3;
	}

	$('body').scroll(function () {
		console.log(1);
	});
	$(window).scroll(function () {
		console.log(1);
	});
});