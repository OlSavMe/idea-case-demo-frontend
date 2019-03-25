import React, { Component } from 'react';
import CategoryItem from '../../components/categoryComponents/CategoryItem';

export default class CategoryDetails extends Component {

  render() {
    return (
      <div>
        <h2>One Category</h2>
        <CategoryItem item={{name:"Hard-coded", budget:12345}} />
      </div>
    );
  }
}