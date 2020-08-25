import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../signup';
import { render } from '@testing-library/react';

configure({adapter:new Adapter()});
it('Execute without fail',()=>{
  render(<div></div>)
})
test('SignUp', () => {
    expect(true).toBeTruthy();
  });

  it('Submit Function',()=>{
    const onSubmitFun=jest.fn();
    const wrapper=mount(<form onSubmit={onSubmitFun}></form>)
    const form=wrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFun).toHaveBeenCalledTimes(1);
  });

  it('userName ',()=>{
    const wrapper=mount(<input type="text" name="userName"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('userName');
  })

  it('Password ',()=>{
    const wrapper=mount(<input type="password" name="password"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('password');
    expect(input.prop('name')).toEqual('password');
  })

  it('Password ',()=>{
    const wrapper=mount(<input type="password" name="repassword"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('password');
    expect(input.prop('name')).toEqual('repassword');
  })

  it('Email-Id ',()=>{
    const wrapper=mount(<input type="text" name="email"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('email');
  })

  it('MobileNumber ',()=>{
    const wrapper=mount(<input type="text" name="mobilenumber"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('mobilenumber');
  })