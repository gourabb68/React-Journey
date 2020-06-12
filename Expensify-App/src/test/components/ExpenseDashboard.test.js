import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboradPage, {ExpenseDashboardd} from '../../components/ExpenseDashboardPage';


test('should render expense Dashboard',()=>{
    const wrapper=shallow(<ExpenseDashboradPage/>)
    expect(wrapper).toMatchSnapshot();
})
