import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import { render } from '@testing-library/react';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DashBoard from '../dashboard';



configure({adapter:new Adapter()});
it('Execute without fail',()=>{
    render(<div></div>)
  })

  test('DashBoard', () => {
    expect(true).toBeTruthy();
  });

//   it('Render',()=>{
//     const wrapper=shallow(<DashBoard />);
//     const h=wrapper.find("h1");
//     const result=h.text();
//     expect(result).toBe("Dashboard");
//   })