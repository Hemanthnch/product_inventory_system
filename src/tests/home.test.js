import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../home';
import HomeDetail from '../homedetail';
import { render } from '@testing-library/react';

configure({adapter:new Adapter()});

it('Execute without fail',()=>{
    render(<div></div>)
  })

test('Home', () => {
    expect(true).toBeTruthy();
  });

  it('Render',()=>{
    const wrapper=shallow(<Home />);
    const label=wrapper.find("label");
    const result=label.text();
    expect(result).toBe("Search : ");
  })

  it('Search ',()=>{
    const wrapper=mount(<input type="text" name="search"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('search');
  })
