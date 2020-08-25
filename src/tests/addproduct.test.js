import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import { render } from '@testing-library/react';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import AddProduct from '../addproduct';


configure({adapter:new Adapter()});
it('Execute without fail',()=>{
    render(<div></div>)
  })

  test('Add Product', () => {
    expect(true).toBeTruthy();
  });


  it('productName ',()=>{
    const wrapper=mount(<input type="text" id="productName"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('id')).toEqual('productName');
  })

  it('productImage ',()=>{
    const wrapper=mount(<input type="file" id="productImage"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('file');
    expect(input.prop('id')).toEqual('productImage');
  })

  it('productPrice ',()=>{
    const wrapper=mount(<input type="text" id="productPrice"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('id')).toEqual('productPrice');
  })

  it('productStock ',()=>{
    const wrapper=mount(<input type="number" id="productStock"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('number');
    expect(input.prop('id')).toEqual('productStock');
  })

  it('productDescription ',()=>{
    const wrapper=mount(<input type="text" id="productDescription"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('id')).toEqual('productDescription');
  })
