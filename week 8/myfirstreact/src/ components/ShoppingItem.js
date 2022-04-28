import React from 'react';

class ShoppingItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: this.props.item,
      quantity: 0
    }
  }

  render () {
    return (
          <li>{this.state.item}: {this.state.quantity}</li>
        )  
    }
}


 export default ShoppingItem