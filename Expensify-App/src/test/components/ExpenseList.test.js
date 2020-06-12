import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import {ExpenseListItem} from '../../components/ExpenseListItem';
// import expenses '../'
const demoState =  [{
        id: 'abcdef',
        description: 'januray rent',
        note: 'This was the final payment',
        amount: 54220,
        createdAt: 0
    }]

test('should render expense list with expense',()=>{
    const wrapper=shallow(<ExpenseList expenses ={demoState}/>)
    expect(wrapper).toMatchSnapshot();
})
// if we make any changes like if no expense props provided then only 
//it renders then also it is passing cause what is rendering that matters not what is the content
