import { useState, useEffect } from 'react'

const ItemCount = ({stock,getQuantity}) => {
    const [count,setCount]= useState(0);

    const aumentar=()=>{
        if(count < stock){
            setCount(count+1)
        }
    }
    const dismuir=()=>{
        if(count > 0){
            setCount(count-1)
        }
    }

    useEffect(() => {
    getQuantity(count)
    }, [count, getQuantity])

  return (
    <div>
      <div>
        <button className='btn btn-success' onClick={dismuir}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-danger' onClick={aumentar}>+</button>
      </div>
    </div>
  )
}

export default ItemCount
