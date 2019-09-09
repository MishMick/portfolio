import { shallowMount } from '@vue/test-utils'

import Hello from '@/components/Hello'

describe('HelloWorld.vue', () => {
  it('renders message when one is passed', () => {
    const message = 'Hello there!'
    const wrapper = shallowMount(Hello, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
  it('renders default message when one is not passed', () => {
    const defaultMessage = 'Hello World!'
    const wrapper = shallowMount(Hello, {
      propsData: {}
    })
    expect(wrapper.text()).toMatch(defaultMessage)
  })
})
