import {shallowMount, createLocalVue} from '@vue/test-utils';
import ProductExperience from './ProductExperience.vue';
import vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(vuex);

const store = new vuex.Store({
  getters: {
    activeProduct:() => 'asdasd',
  },
});

describe('Product experience section', ()=>{
  let cmp = shallowMount(ProductExperience,{ store, localVue });

  it('Same products', () => {
    expect(cmp.html()).toMatchSnapshot();
  });
});