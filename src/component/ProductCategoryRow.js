import React, { Component } from 'react';

class ProductCategoryRow extends React.Component{
    render(){
        const category= this.props.category;
        return (
            <tr>
                <th colspan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

export default ProductCategoryRow;

