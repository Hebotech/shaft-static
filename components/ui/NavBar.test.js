import {shallowMount} from '@vue/test-utils';
import NavBar from './navBar.vue';

describe('Navbar ui components', ()=>{
  let cmp = shallowMount(NavBar);
  it('Navbar is the same with the logo', ()=>{
    expect(cmp.element).toMatchSnapshot();
  })
})