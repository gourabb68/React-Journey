import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
const expenses =  [{
    id: 'abcdef',
    description: 'januray rent',
    note: 'This was the final payment',
    amount: 54200,
    createdAt: 0
}]


let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expenses={expenses[0]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle editExpense', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
//  });

// test('should handle removeExpense', () => {
//   wrapper.find('button').simulate('click');
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(removeExpense).toHaveBeenLastCalledWith({
//     id: expenses[0].id
//   });
// });
