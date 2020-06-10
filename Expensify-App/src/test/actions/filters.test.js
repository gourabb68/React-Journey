//need access of expense action generator
import {setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';
///Testing for set text filter
test('should be set up text filter value',()=>{
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });
});
//we can add for default as well
///Testing for set SORT_BY_DATE filter
test('should be set up sort by date value',()=>{
   
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',       
    });
});


///Testing for set SORT_BY_AMOUNT filter
test('should be set up sort by amount value',()=>{
   
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',       
    });
});

///Testing for set SET_START_DATE filter
test('should be set up start date value',()=>{
   
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE', 
        startDate: moment(0)      
    });
});

///Testing for set SET_END_DATE filter
test('should be set up start date value',()=>{
   
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE', 
        endDate: moment(0)      
    });
});

