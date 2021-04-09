import {mount, createLocalVue} from '@vue/test-utils';
import Product from './product.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  mutations:{
    DEACTIVATE_PRODUCTS: (state) => state.otherProdudct = 'deactive',
    SELECT_ACTIVE_PRODUCT:  (state, index) => state.activeProduct = `active ${index}`,
  },
  state:{
    activeProduct: '',
    otherProdudct: ''
  }
})

describe('Product ui component [ui/products]', ()=>{
  let cmp = mount(Product, {store, localVue, 
    propsData:{
      images:['hello-tester.png'],
      productIndex: 1,
      active: false,
      name: 'Tester',
  },
  mocks:{
    $ga: {
      event: () => jest.fn()
    }
  }
});

  it('When you click the product, you activate the product', ()=>{
    spyOn(cmp.vm, 'setActiveProduct')
    const productWrapper = cmp.find('div');
    productWrapper.trigger('click');

    expect(cmp.vm.setActiveProduct).toBeCalled();
  })
  
  it('When trigger setActiveProduct, commit to Deactivate the actual product and then activate the new one', ()=>{
    const productWrapper = cmp.find('div');
    productWrapper.trigger('click');

    expect(cmp.vm.$store.state.otherProdudct).toBe('deactive');
    expect(cmp.vm.$store.state.activeProduct).not.toBe('active 1');
  })
})