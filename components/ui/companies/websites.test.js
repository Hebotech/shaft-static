import {mount} from '@vue/test-utils';
import Website from './websites.vue'

describe('Websites companies component [ui/companies]', ()=>{
  let cmp = mount(Website, {
    propsData:{
      company:{
        companyId:'sahsjdasd',
        properties:{
          name: {
            value: 'Shaft'
          }, 
          website:{
            value: 'shaft.mx'
          }
        }
      }
    },
    mocks:{
      $ga: {
        event: () => console.log('Hi tester!')
      }
    }
  })

  it('When click on the company website link save Google Analytics Event', () => {
    spyOn(cmp.vm, 'addNewClick');
    spyOn(cmp.vm.$ga, 'event');
    const linkWrapper = cmp.find('a');
    linkWrapper.trigger('click');

    expect(cmp.vm.addNewClick).toBeCalled();
  })

})

