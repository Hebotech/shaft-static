import {mount} from '@vue/test-utils';
import CtaButton from './CtaButton.vue';

describe('Cta button ui component', ()=>{
  let cmp = mount(CtaButton);
  it('The button complete an ctaAction method', ()=>{
    const ctaWrapper = cmp.find('.tada');

    spyOn(cmp.vm, 'ctaAction');
    ctaWrapper.trigger('click');
    
    expect(cmp.vm.ctaAction).toBeCalled();
  })
})