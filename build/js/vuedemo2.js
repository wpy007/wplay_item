window.onload = function () {
	var example1 = new Vue({
		el: '#example-1',
		data: {
			items: [
				{message: 'Foo'},
				{message: 'Bar'}
			]
		}
	})

	var example2 = new Vue({
		el: '#example-2',
		data: {
			parentMessage: 'Parent',
			items: [
				{message: 'Foolish'},
				{message: 'Barry'}
			]
		}
	})

	var example3 = new Vue({
		el: '#repeat-object',
		data: {
			object: {
				FirstName: 'John',
				LastName: 'Doe',
				Age: 30
			}
		}
	})

//  下面这一个大块是个成功的整体
	Vue.component('todo-item', {
		template: '\
			<li>\
			{{ title }}\
			<button v-on:click="$emit(\'remove\')">X</button>\
			</li>\
		',
		props: ['title']
	})

	new Vue({
		el: '#todo-list-example',
		data: {
			newTodoText: '',  // input初始值嘛
			todos: [
				'Do the dishes',
				'Take out thie trash',
				'Mow the lawn'
			]
		},
		methods: {
			addNewTodo: function () {
				this.todos.push(this.newTodoText);
				this.newTodoText = '';
			}
		}
	})
//  上面这一个大块是个成功的整体

	/*data: {
		number: [1,2,3,4,5]
	},
	methods: {
		even: function (numbers) {
			return numbers.filter(function (number){
				return number % 2 === 0
			})
		}
	}*/

}