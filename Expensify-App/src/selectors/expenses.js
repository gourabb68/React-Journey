
//Get visible Expenses for filter and sort
const getVisibleExpense= (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expenses)=>{
        
        const startDateMatch =typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
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