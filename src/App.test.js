import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Content from './content'

configure({adapter:new Adapter()});
test('If links occured', () => {
  expect(true).toBeTruthy();
});

it('Renders without executing',()=>{
  const wrapper=shallow(<App/>)
  const content =wrapper.find(Content)
 expect(content.exists()).toBe(true);
})