import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

//description , amount, createdAt
//下面的props已经展开， 可以grap任何要用的props

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  // console.log(createdAt),
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;

