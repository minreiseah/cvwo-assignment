import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addTopping } from '../app/pizzaSlice'

const Pizza: React.FC = () => {

  const pizza = useAppSelector(state => state.pizza)
  const dispatch = useAppDispatch()

  return (
    <React.Fragment>
      <h1>Pizza</h1>

      {pizza.toppings.map(topping => (
        <div key={topping}>{topping}</div>
      ))}

      <button onClick={() => dispatch(addTopping('pepperoni'))}> Add Pepperoni</button>

    </React.Fragment>
  )

}

export default Pizza;
