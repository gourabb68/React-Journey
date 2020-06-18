import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
// import expenses from '../fixtures/expenses';

const expenses =  [{
  id: 'abcdef',
  description: 'januray rent',
  note: 'This was the final payment',
  amount: 54200,
  createdAt: 0
}]
let startAddExpense, history, wrapper;
//before each test this will happen
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});

// //testing with spy 
// //creating a Spy function
// const add = jest.fn(()=> 3);
// //here add is now spy or fake function
// test('ADD'()=>{
//     //here add will call the spy function 
//     //no matter what argument is there or not
//     //irrespective of argument it returns 3 always
//     expect(add(1,2)).toBe(3);//test case passed
//     expect(add(2,2)).toBe(4);//test case failed cz it always returns 4
//     expect(add).toHaveBeenCalledTimes(1);//test case passed
//     expect(add).toHaveBeenCalledWith(1,2);//test case passed
// })