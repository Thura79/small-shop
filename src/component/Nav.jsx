import React from "react";
import { FaShopify } from "react-icons/fa";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const fitem = useSelector((state) => state.product.fav);
  const cart = useSelector(state => state.product.cart)
  return (
    <div className=" d-flex align-items-center justify-content-between my-3">
      <Link to={"/"} className="text-decoration-none">
        <div className="btn d-flex align-items-center gap-1">
          <FaShopify className=" fs-1 text-success" />
          <h3 className=" mb-0">SHOP</h3>
        </div>
      </Link>
      <div className=" d-flex align-items-center gap-3">
        <Link to={'/addcart'} className="text-decoration-none">
          <div className=" d-flex btn align-items-center border p-2 gap-1 rounded">
            <AiOutlineShoppingCart className="" />
            <p className=" mb-0">{cart.length}</p>
          </div>
        </Link>
        <Link to={"/fav"} className="text-decoration-none">
          <div className=" d-flex btn align-items-center border p-2 gap-1 rounded">
            <AiFillHeart className=" text-danger" />
            <p className=" mb-0">{fitem.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
