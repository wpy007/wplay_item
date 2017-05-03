window.onload = function () {
	var app = new Vue ({
		el: '#app',
		data: {
			message: 'hello wplay'
		}
	})

	var app2 = new Vue ({
		el: '#app-2',
		data: {
			message: '页面加载于' + new Date()
		}
	})

	var app3 = new Vue ({
		el: '#app-3',
		data: {
			seen: true
		}
	})

	var app4 = new Vue ({
		el: '#app-4',
		data: {
			todos: [
				{text: '学习javascript'},
				{text: '学习vue'},
				{text: '开始搞事'}
			]
		}
	})
	app4.todos.push({text: 'app4.data或者app4.el都是undefined'})

	var app5 = new Vue ({
		el: '#app-5',
		data: {
			message: 'hello Wplay'
		},
		methods: {
			reverseMessage: function () {
				this.message = this.message.split('').reverse().join('')
			}
		}
	})

	var app6 = new Vue ({
		el: '#app-6',
		data: {
			message: '骄傲的少年'
		}
	})

	// 组件模板系列
	Vue.component('todo-item', {
		props: ['todo'],
		template: '<li>{{ todo.text }}</li>'
	})

	var app7 = new Vue({
		el: '#app-7',
		data: {
			groceryList: [
				{text: '篮球'},
				{text: '足球'},
				{text: '其他什么运动'}
			]
		}
	})

}
