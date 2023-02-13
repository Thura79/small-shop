import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addcart, removefav } from "../services/productSlice";

const Favitem = () => {
  const fitem = useSelector((state) => state.product.fav);
  const dispatch = useDispatch();

  console.log(fitem);
  return (
    <div className=" d-flex align-items-center flex-wrap gap-4 my-5">
      {fitem?.map((item) => (
        <div key={item?.id} className=" border shadow-sm rounded-3 p-3">
          <div
            className="  d-flex align-items-center gap-5 "
            // style={{ width: "16rem" }}
          >
            <img
              src={item?.image}
              className=" mx-auto d-block p-3 shadow-sm"
              height="200px"
            />
            <div className=" d-flex flex-column mt-4">
              <h5 className="">{item?.title}</h5>
              <p className=" text-black-50">{item?.description}</p>
              <p>$ {item?.price}</p>
            </div>
            <div className="d-flex flex-column gap-3">
              <button onClick={() => dispatch(addcart(item))} className=" btn btn-outline-primary">
                <FaShoppingCart />
              </button>
              <button
                onClick={() => dispatch(removefav(item))}
                className=" btn btn-outline-danger"
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favitem;
