import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
//first value is dispatch
export const ExpenseListItem = ({ description,amount,createdAt,id})=>{
    return (
      <div>
        <Link to={`/edit/${id}`} activeClassName="is-active" exact={true}>
          <h3>{description}</h3>
          </Link>
          <p>
            {numeral(amount/100).format('$0,0.00')} - 
            {moment(createdAt).format('MMMM Do, YYYY')}
          </p>
          {/* //creating button to remove expense} */}
         
          
      </div>
    );
}


export default connect()(ExpenseListItem);