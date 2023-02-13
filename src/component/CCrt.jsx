import React, { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggle } from "../services/productSlice";

const CCrt = ({ item, incprice, decprice }) => {
  const dispatch = useDispatch();
  let [count, setcount] = useState(1);

  let inc = () => {
    // item.qty ++
    // setcount(item?.qty)
    setcount((pre) => (pre += 1));
    incprice(item.price)
  };

  let dec = () => {
    // item.qty --;
    // setcount(item?.qty)
    if (count > 1) {
      setcount((pre) => (pre -= 1));
      decprice(item.price)
    }
  };

  const removehan = () => {
    dispatch(toggle(item));
     decprice(count * item.price)
  }
  return (
    <div>
      <div className="border shadow-sm rounded-3 p-3 mt-3">
        <div className="d-flex align-items-center gap-4">
          <img src={item?.image} className="p-3 shadow-sm" height="200px" />
          <div className="d-flex flex-column gap-3">
            <h5 className="">{item?.title}</h5>
            <p>$ {item?.price * count}</p>
            <div className="d-flex align-items-center gap-3">
              <AiFillPlusSquare onClick={inc} className=" text-primary fs-3" />
              {count}
              <AiFillMinusSquare onClick={dec} className=" text-primary fs-3" />
            </div>
          </div>
        </div>
        <button
          onClick={removehan }
          className=" mt-3 btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CCrt;
