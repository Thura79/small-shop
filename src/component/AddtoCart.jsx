import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CCrt from './CCrt';

const AddtoCart = () => {
    const cart = useSelector(state => state.product.cart);
    const [total, settotal] = useState(0);
    const dispatch = useDispatch();

    const incprice = (pc) => {
        settotal(total + pc)
    }

    const decprice = (pc) => {
        settotal(total - pc)
    }

    useEffect(() => {
        settotal(cart?.reduce((pv, cu) => pv + (cu.price), 0))
    }, [])
    console.log(cart);
  return (
    <div className=' my-5 d-flex align-items-start justify-content-between'>
      <div className="col-7">
      {
        cart?.map(item => (
            <CCrt key={item?.id} incprice={incprice} decprice={decprice} item={item}/>
        ))
      }
      </div>
      <div className="col-4">
        <div className=" border shadow-sm rounded p-3 mt-3" style={{height: '150px'}}>
            <h3>Total Price - {total.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}

export default AddtoCart