import Vuex from 'vuex';
import {mount, shallowMount, createLocalVue} from '@vue/test-utils';
import MainProduct from './MainProduct.vue';
import ProductCircle from './ProductCircle.vue';
import productsMixin from '../../../mixins/productHelmetsMixin.js';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state:{
    jel:'asda',
  },
  mutations:{
    ADDING_COUNTER:()=>jest.fn(),
    RESTART_COUNTER:()=>jest.fn(),
  },
  actions:{
    lastProduct:()=> jest.fn(),
    nextProduct:()=> jest.fn(),
  }
});

const mixins = {
  productsMixin
};

const data = () => {
    return {
      activeProduct:{
       images:['asdasda.png','superDuper.png']
      }
    }
}

describe('All products components from sections [sections/product]', ()=>{
  it('MainProduct', ()=>{
    let cmp = mount(MainProduct, {store, localVue, mixins});
    expect(cmp.html()).toMatchSnapshot();
  })

  it('ProductCircle trigger prodcucts (in mixin) with key up', () => {
    let cmp = shallowMount(ProductCircle, {store, localVue, data,mixins, attachToDocument:true});
    spyOn(cmp.vm, 'lastImage');

    window.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 37 }))
    expect(cmp.vm.lastImage).toBeCalled();
  });

  it('ProductCircle trigger prodcucts (in mixin) with key down', () => {
    let cmp = shallowMount(ProductCircle, {store, localVue,data, mixins, attachToDocument:true});
    spyOn(cmp.vm, 'lastProduct');

    window.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 38 }))
    expect(cmp.vm.lastProduct).toBeCalled();
  });

  it('ProductCircle trigger prodcucts (in mixin) with key right', () => {
    let cmp = shallowMount(ProductCircle, {store, localVue,data, mixins, attachToDocument:true});
    spyOn(cmp.vm, 'nextImage');''

    window.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 39 }))
    expect(cmp.vm.nextImage).toBeCalled();
  });

  it('ProductCircle trigger nextProduct with key left', () => {
    let cmp = shallowMount(ProductCircle, {store, localVue,data, mixins, attachToDocument:true});
    spyOn(cmp.vm, 'nextProduct');

    window.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 40 }))
    expect(cmp.vm.nextProduct).toBeCalled();
  });
});