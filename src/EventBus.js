import Vue from 'vue'

/* eslint-disable no-new */
var bus = new Vue()
export default bus

/*
解决组件之间通信
无论组件间的结构如何复杂，只需要发起方：
notifyHello是自定义的，接收方和发出方一样即可
eventBus.$emit('notifyHello', {
  msg: 'hello'
})

接收方：
eventBus.$on('notifyHello', (params) => {
  // do something you need with params
  this.greet(params)
})
*/
