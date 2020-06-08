import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//first value is dispatch
const ExpenseListItem = ({ description,amount,createdAt,id})=>{
    return (
      <div>
        <Link to={`/edit/${id}`} activeClassName="is-active" exact={true}>
          <h3>{description}</h3>
          </Link>
          <p>{amount} - {createdAt}</p>
          {/* //creating button to remove expense} */}
         
          
      </div>
    );
}


export default connect()(ExpenseListItem);