import {mount} from '@vue/test-utils';
import HeroHeader from './HeroHeader.vue';

describe('HeroHeader section', ()=>{
  let cmp = mount(HeroHeader);

  it('Same component during june', ()=>{
    expect(cmp.vm.element).toMatchSnapshot();
  });
});