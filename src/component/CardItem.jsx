import React from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addcart, favitem } from "../services/productSlice";

const CardItem = ({ item}) => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className=" border d-flex flex-column shadow-sm rounded-3 p-3" style={{ width: '16rem'}}>
        <img src={item?.image} className=" mx-auto d-block" height="100px" />
        <div className=" d-flex flex-column mt-4">
            <h6 className=" text-truncate">{item?.title}</h6>
            <div className="d-flex gap-2 align-items-center">
                <AiFillStar className=" text-warning" />
            <p className=" mb-0 text-black-50">{item?.rating?.rate}</p>
            </div>
            <p>$ {item?.price}</p>
            
        </div>

        <div className="d-flex gap-3 mt-auto">
            <button onClick={() => dispatch(addcart(item))}
            className=" btn btn-outline-primary">
                <FaShoppingCart />
            </button>
            <button onClick={() => dispatch(favitem(item))} className=" btn btn-outline-danger">
                <AiFillHeart/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
