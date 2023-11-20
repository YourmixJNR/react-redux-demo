import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyIceCream from '../redux/iceCream/iceCreamActions'

const HooksIceCreamContainer = () => {
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

  return (
    <div>
      <h2>Nums of IceCream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Button</button>
    </div>
  )
}

export default HooksIceCreamContainer
