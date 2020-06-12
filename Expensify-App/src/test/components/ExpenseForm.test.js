import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

const expense =  [{
    id: 'abcdef',
    description: 'januray rent',
    note: 'This was the final payment',
    amount: 54200,
    createdAt: 0
}]

test('Should render Expense form',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

//should render expense form with expense data

test('Should render Expense form with data',()=>{
    const wrapper = shallow(<ExpenseForm expenses={expense[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

// lets add some test cases for handler like onChange onSubmit
// checking for wrong data it should show error

test('Should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    //first finding the form then simulate the event
    wrapper.find('form').simulate('submit', {//passing the e value as 2nd parameter
        preventDefault: ()=>{}
    });
    //taking snap shot before calling simuate
    expect(wrapper).toMatchSnapshot();
    //fetch the state and check erorr should not occur 
    //means as we passed data so state should not be empty
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    //creaing snapshot after state get changed after submitting
    expect(wrapper).toMatchSnapshot();
})
// checking onDescriptionChange
test('should change description when input change',()=>{
    const wrapper = shallow(<ExpenseForm />);
  // get the input tag and  the particular index
  //as there are so many input tag using .at(<index>)
    wrapper.find('input').at(0).simulate('change', {//passing the e value as 2nd parameter
        target : {value:'Rent'}
    });
    expect(wrapper.state('description')).toBe('Rent');
})

///checking onNoteChange 
test('should change note when input change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = 'Rent amount for last year'
  // get the input tag and  the particular index
  //as there are so many input tag using .at(<index>)
    wrapper.find('textarea').simulate('change', {//passing the e value as 2nd parameter
        target : {value} //short hand syntax
    });
    expect(wrapper.state('note')).toBe(value);
})

///checking onAmountChange
test('should change amount when input change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = '200';
  // get the input tag and  the particular index
  //as there are so many input tag using .at(<index>)
    wrapper.find('input').at(1).simulate('change', {//passing the e value as 2nd parameter
        target : {value} //short hand syntax
    });
    expect(wrapper.state('amount')).toBe(value);
})
///checking onAmountChange for wrong input
test('should change amount when input change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = '200.222';
  // get the input tag and  the particular index
  //as there are so many input tag using .at(<index>)
    wrapper.find('input').at(1).simulate('change', {//passing the e value as 2nd parameter
        target : {value} //short hand syntax
    });
    expect(wrapper.state('amount')).toBe('');
})


test('Should call onSubmit props for valid form submission',()=>{
    const value = '200'
    //creating spy
    const onSubmitSpy=jest.fn();
    const wrapper = shallow(<ExpenseForm expenses={expense[0]} onSubmit={onSubmitSpy}/>);
        wrapper.find('form').simulate('submit', {//passing the e value as 2nd parameter
            preventDefault: ()=>{}
        });

        expect(wrapper.state('error')).toBe('');
        expect(onSubmitSpy).toHaveBeenLastCalledWith({
            description: expense[0].description,
            amount: expense[0].amount,
            note: expense[0].note,
            createdAt: expense[0].createdAt
        }) 
})
//testing onDateChanged
test('Should call onDateChanged props for valid form submission',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);//passing moment to prop onDateChange in SingleDatePicker selector
    expect(wrapper.state('createdAt')).toEqual(now)
});

//testing onFocusChanged
test('Should call onDateChanged props for valid form submission',()=>{
    const focused= true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});//passing moment to prop onDateChange in SingleDatePicker selector
    expect(wrapper.state('calenderFocused')).toEqual(focused)
});