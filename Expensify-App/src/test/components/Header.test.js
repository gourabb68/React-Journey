import React from 'react';
import Header from '../../components/Header';

///----------using react-test-renderer-------------
//Importing Shallow for rendering the comp not child one form 
// react library created by react team named react-test-rendered for testing component
//that render component virtually not in browser
// import ReactShallowRenderer from 'react-test-renderer/shallow'
// //react shallow and dom two main ways to test react component
// // shallow renders given component DOM renders child component 
// test('Should render Header correctly',()=>{
//     const renderer = new ReactShallowRenderer();
//     //render something not in browser
//     renderer.render(<Header />)
//     // renderer.getRenderOutput() returns render output of jsx we put in
//     // console.log(renderer.getRenderOutput());/// line 18
//     //snapshot allow us to track changes data over time
//     //we can create a snapshot of header at current 
//     //point of time it notify if Header changes we don't want and detect it
//     //need to call toMatchSnapshot() to create snapshot
//     expect(renderer.getRenderOutput()).toMatchSnapshot();//line -23 
//     //one snapshot is created based on what renders for the first time it is always going to pass
//     //2nd time when run test case it check with existings one 
//     //after the snap shot is created if we change something in comp it will give error 
//     //now we have two choice one change our code accordingly or reject the error  
//     //what if i did want to make a real change and keep that change it will ask for press u to update the changes 
//     //in snap shot 

// })


/// creating snap shot using enzyme---------------------------

import {shallow} from 'enzyme';

test('Should render Header correctly ',()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    // expect(wrapper.find('h1').length).toBe(1)
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    //creating snapshot using enzyme
    expect(wrapper).toMatchSnapshot();

})

// //should call startLogout on button click
// test('should call startLogout on button click',()=>{
//     const startLogout = jest.fn();
//     const wrapper = shallow(<Header startLogout={startLogout} />)
//     wrapper.find('button').simulate('click');
//     expect(startLogout).toHaveBeenCalled();
// })

