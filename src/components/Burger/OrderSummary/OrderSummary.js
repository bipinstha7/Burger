import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class. Changed to class for testing purpose.

  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>
            {ingredientKey}: {this.props.ingredients[ingredientKey]}
          </span>
        </li>
      );
    });

    return (
       <Auxillary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Auxillary>
    );
  }
}

export default OrderSummary;