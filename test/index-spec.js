import Vue from 'vue'
import { LazyComponent } from '../lib'
import sinon from 'sinon'

describe('VueLazyload.js Test Suite', function () {

  let fackCheckInView = sinon.fake.returns(function () {
    debugger 
    return 1;
  })

  // sinon.replace(LazyComponent.default.LazyComponent.methods, 'checkInView', fackCheckInView)

  let components = {
    ItemComponent: {
      template: '<span>template</span>',
      LazyComponent: LazyComponent
    }
  }
  it('should check if value is truthy', () => {
    //lazyComponent
    const vm = new Vue({
      template: '<LazyComponent><ItemComponent></ItemComponent></LazyComponent>',
      data: { foo: true },
      components: components
    }).$mount()
    debugger
    expect(vm.$el.innerHTML).to.equal(components.ItemComponent.template)

  })

})
