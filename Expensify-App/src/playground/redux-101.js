import {createStore} from 'redux';//use to create redux store
//create redux state container with default state value as count 0
//create action generator which will pass a action object
// const incrementCount =(payload={}) =>({ 
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
//Using destructuring
const incrementCount =({incrementBy=1}) =>({ 
    type: 'INCREMENT',
    incrementBy: incrementBy
});
const decrementCount =({decrementBy=1}) =>({ 
    type: 'DECREMENT',
    decrementBy
});
const reset =() =>({ 
    type: 'RESET'
});
const store = createStore((state = {count: 0},action)=>{
 
 switch(action.type){
     case 'INCREMENT':
         const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return{
            count: state.count+ incrementBy//state is prev state
        };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return{
                count: state.count-decrementBy//state is prev state
            }; 
        case 'RESET':
            return{
                count: 0
            };

    default: 
       return state;
 }

});

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(reset());
//watch the changes in state

// console.log(store.getState());//return current state object
//sending first action to store
// store.dispatch(
//     {
//         type: 'INCREMENT' //type of action upper case standard
//     }
// );
// store.dispatch(incrementCount());

// unsbscribe();//after first dispatch other will be ignored
// console.log(store.getState());
// store.dispatch(
//     {
//         type: 'DECREMENT'//type of action upper case standard
        
//     }
// );

//sending first action to store
// store.dispatch(
//     {
//         type: 'INCREMENT', //type of action upper case standard
//         incrementBy: 5
//     }
// );
// unsbscribe();//after first dispatch other will be ignored
// console.log(store.getState());
// store.dispatch(
//     {
//         type: 'DECREMENT', //type of action upper case standard
//         decrementBy: 10
//     }
// );
// console.log(store.getState());//return current state object

// store.dispatch(
//     {
//         type: 'RESET' //type of action upper case standard
//     }
// );
// console.log(store.getState());//return current state object

