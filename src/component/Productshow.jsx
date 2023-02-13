import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../api';
import { getProducts } from '../services/productSlice';
import CardItem from './CardItem';
import Loading from './Loading';

const Productshow = () => {
    const count = useSelector(state => state.product.products);
    const dispatch = useDispatch();
    

    const getprdata = async() => {
        const data = await getData('/products');
        dispatch(getProducts(data))
    }
    
    useEffect(() => {
        getprdata();
    }, [])

  return (
    <div className='d-flex flex-wrap align-items-center justify-content-between gap-3 my-5'>
        {
            count?.length > 0 ? count?.map(item => (
                <CardItem key={item?.id} item={item} />
            )) : <Loading/>
        }
    </div>
  )
}

export default Productshow