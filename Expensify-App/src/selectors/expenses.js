import  moment from 'moment';
//Get visible Expenses for filter and sort
const getVisibleExpense= (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expenses)=>{
        const createdAtMoment = moment(expenses.createdAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        //if expense.desc has string variable inside in tit
        const textMatch =typeof text !=='string' || expenses.description.toLowerCase().includes(text);
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy=== 'date'){
            return a.createdAt < b.createdAt ? 1 :-1;
        }else if(sortBy=== 'amount'){
            return a.amount < b.amount ? 1 :-1;
        }
    })
};
export default getVisibleExpense;