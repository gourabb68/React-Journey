//test driven development apporoach..write test case first..not for component
import selectExpenseTotal from '../../selectors/expenses-total';

const expense =  [{
    id: 'abcdef',
    description: 'januray rent',
    note: 'This was the final payment',
    amount: 54220,
    createdAt: 0 
},
{
    id: 'abcdef',
    description: 'januray rent',
    note: 'This was the final payment',
    amount: 5420,
    createdAt: 0
}]

test('Should return 0 if no expenses',()=>{
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);
})

test('Should add up a single expenses',()=>{
    const res = selectExpenseTotal([expense[0]]);
    expect(res).toBe(54220);
})


test('Should add up a single expenses',()=>{
    const res = selectExpenseTotal(expense);
    expect(res).toBe(59640);
})