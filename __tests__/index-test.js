import React from 'react'
import '../setup.js'
import { shallow, mount, render } from 'enzyme';
import Component from '../src/index.js'


test('Component render Correctly', () => {
  const component = shallow(<Component/>)

  expect(component).toHaveLength(1)
})

test('Component have all properties', () => {
  const component = mount(<Component/>)
  
  expect(component.props()).toHaveProperty('alertMode')
  expect(component.props()).toHaveProperty('className')
  expect(component.props()).toHaveProperty('confirmText')
  expect(component.props()).toHaveProperty('content')
  expect(component.props()).toHaveProperty('declineText')
  expect(component.props()).toHaveProperty('desktopDraggable')
  expect(component.props()).toHaveProperty('onClose')
  expect(component.props()).toHaveProperty('onConfirm')
  expect(component.props()).toHaveProperty('onDecline')
  expect(component.props()).toHaveProperty('title')
})

test('Component have default properties', () => {
  const component = mount(<Component/>)  

  expect(component.props()["title"]).toBe('Title')
  expect(component.props()["className"]).toBe('')
  expect(component.props()["confirmText"]).toBe('Confirm')
  expect(component.props()["content"]).toEqual(<p>Default content</p>)
  expect(component.props()["declineText"]).toBe('Cancel')
  expect(component.props()["desktopDraggable"]).toBe(true)
  expect(component.props()).toHaveProperty('onClose')
  expect(component.props()).toHaveProperty('onConfirm')
  expect(component.props()).toHaveProperty('onDecline')
})

test('Component mount with custom props values', () => {
  const component = mount(
    <Component 
      title="Custom Title" 
      className="custom-modal" 
      content={<p>custom text</p>} 
      confirmText="CustomConfirm" 
      declineText="CustomDecline" 
      desktopDraggable={false}
    />
  )

  expect(component.props()["title"]).toBe('Custom Title')
  expect(component.props()["className"]).toBe('custom-modal')
  expect(component.props()["confirmText"]).toBe('CustomConfirm')
  expect(component.props()["content"]).toEqual(<p>custom text</p>)
  expect(component.props()["declineText"]).toBe('CustomDecline')
  expect(component.props()["desktopDraggable"]).toBe(false)
})