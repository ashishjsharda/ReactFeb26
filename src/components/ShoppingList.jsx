import React, { Component } from 'react';
class ShoppingList extends Component {
    
    render() { 
        return ( 
            <div className="shopping-List">
                <h1>Shopping List for this week</h1>
                <ul>
                    <li>TV</li>
                    <li>Mobile</li>
                    <li>Laptop</li>
                </ul>
            </div>
         );
    }
}
 
export default ShoppingList;