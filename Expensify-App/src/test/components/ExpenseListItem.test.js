import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';

const expense =  [{
    id: 'abcdef',
    description: 'januray rent',
    note: 'This was the final payment',
    amount: 54220,
    createdAt: 0
}]

test('should render expense list item with expense',()=>{
    const wrapper=shallow(<ExpenseListItem {...expense[0]}/>)
    expect(wrapper).toMatchSnapshot();
})
