window.onload = function () {
	var vm = new Vue({

	})

	//  extent报错，所以先把它封起来吧
	/*var MyComponent = Vue.extent({

	})
	var myComponentInstance = new Mycomponent();*/

	//  因为下面有报错，所以暂时挪到最上面咯
	var staticVue = new Vue({
		el: '#static',  // 必须要用id
		data: {
			isActive: true,
			hasError: false
		}
	})
	var static = new Vue({
		el: '#classObject',
		data: {
			isActive: true,
			error: null
		},
		computed: {
			classObject: function () {
				return {
					// 注意下面这些class名，如果用了横线 - ，就必须用引号''，如果只是一个单词或者下划线 _ ，就不需要引号了，如下三个class
					active: this.isActive && !this.error,
					'text-danger': !(this.error && this.error.type === 'fatal'),
					text_deadline: true
				}
			}
		}
		
	})

	var arrayVue = new Vue({
		el: '#arrayDiv',
		data: {
			activeClass: 'active',
			errorClass: 'text-danger'
		}
	})

	var innerVue = new Vue({
		el: '#innerStyle',
		data: {
			activeColor: 'red',
			fontSize: 30
		}, // 关于对象，最后加了一个,逗号竟然没有错？估计是vue自带的容错率吧
	})

	var innerVue = new Vue({
		el: '#innerStyle2',
		data: {
			styleObject: {
				color: 'cyan',
				fontSize: '20px', // 窝草，这里写了逗号，依旧没有出错。。。
			},
			styleObj: {
				background: '#ccc',
				fontSize: '30px' // 呵呵，覆盖了上面的了
			}
		}
	})

	/**************/

	var data = {a: 1};
	var vm = new Vue({
		data: data
	})
	console.log(vm.a === data.a);	
	//  vm.a已经和data.a双向绑定了
	vm.a = 2;
	console.log(data.a);  // 2

	data.a = 3;
	console.log(vm.a);   // 3

	//  在创建了vm这个实例后，双向绑定就结束了，后面你即使再给data添加键值对，也不再被绑定了
	data.b = 'abc';
	console.log(vm.b); // undefined
	vm.c = 'bc';
	console.log(data.c); // undefined


	var data1 = {a: 2};
	var vm1 = new Vue({
		el: '#example1',
		data: data1
	})

	// 原来要添加 $ 才能真正的显示实例对象的属性啊 
	console.log(vm1.$data === data1);  // true
	console.log(vm1.$el === document.getElementById('example1'));
	// $watch是一个实例方法,监听vm1中的某个属性
	vm1.$watch('a', function (newVal, oldVal) {
		//  这个回调函数的触发在vm1.a改变了之后才触发
		console.log(newVal, oldVal);
	})
	// 改变data1或者vm1都触发,但是两个同时写出来,就以最后地为准,只触发一次了,即忽视了前面的data1的改变
	data1.a = 4;
	vm1.a = 3;

	

	/**********************下面才是开始认真的内容****************************/
	
	new Vue({
		filters: {
			capitalize: function (value) {
				if(!value) return '';
				value = value.toString();
				return value.charAt(0).toUpperCase() + value.slice(1);
			}
		}
	})

	var vm = new Vue({
		el: '#example',
		data: {
			message: 'Hello'
		},
		computed: {
			XXX: function () {
				return null;
			}
		}
	})

	var watchExampleVM = new Vue({
		el: '#watch-example',
		data: {
			question: '',
			answer: 'i can play'
		},
		watch: {
			question: function (newQuestion) {
				this.answer = 'waiting for somebody';
				this.getgetAnswer();
			}
		},
		methods: {
			getAnswer: _.debounce(
				function () {
					var vm = this;
					if(this.question.indexOf('?') === -1) {
						vm.answer = 'thinking';
						return;
					}
					vm.answer = 'Question usually contain a question mark';
					axios.get('http://yesno.wtf/api')
					  .then(function(response) {
					  	vm.answer = _.capitalize(response.data.answer)
					  })
					  .catch(function (error) {
					  	vm.answer = 'error! can not drive'
					  })
				},
				500
			)
		}
	})
	
	


	
}

