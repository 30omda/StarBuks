import "./Cart.css";
import Left from "./left";
import Right from "./Right";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";


function Cart() {
  useEffect(()=>{  window.scrollTo(0, 0);

  },[])
  const items = useSelector(state =>state.cart.itemsList)

   return (
    <>
      <div className="cart">
        <div className="row">
          <Left/>
          <Right products = {items}/>
        </div>
      </div>
    </>
  );
}

export default Cart;
