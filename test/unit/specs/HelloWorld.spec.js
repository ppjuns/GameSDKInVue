import Vue from 'vue'
import HelloWorld2 from '@/components/HelloWorld2'

describe('HelloWorld2.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld2)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
