import { useDispatch } from "react-redux";
import { cartActions } from "../../assets/store/cartSlice";
import plus from "../../assets/icons/cart/plus.svg";
import minus from "../../assets/icons/cart/minus.svg";
import { useSelector } from "react-redux/es/exports";
import { useState , useEffect} from "react";



function CartProduct({ id , title ,img ,size ,quantity}) {
  console.log(size);
  const [show,setShow]=useState(false);
  const total = useSelector(state =>state.cart.totalQuantity);
  const dispatch = useDispatch();
  const items =useSelector(state =>state.cart.itemsList);
 
  useEffect(()=>{
   localStorage.setItem('cart',JSON.stringify(items))
   },[items])
 
  const incrementCartItem = () => {
    if ( total < 15){ 
      dispatch(
        cartActions.addToCart({
          title,
          img,
          id,
          size
        })
      );
    }else{ 
    setShow(true);
    }
   
  };

  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart({id,size}));
  };

  const click = () => {
  setShow(false)
}


    function Popup(){

    
      return(
        <>
         <div className="alert">
          <div className="contain">
          <h6>Maximum order is 15 items. Please adjust your order.</h6>
          <div> 
            <button onClick={click} >Got it</button>
            </div>
         
          </div>
          
          </div>
        
        </>
      )
       
}
    return (
      <>
      {show &&<Popup/>}
<li className="item" key={id}>

<div className="col-lg-3 col-sm-6 one-product mx-3">
               <div className="contain">
               
                  <img src={img}  alt="" />
                   <p >{title}</p> 
               </div>
               <div className="details">
               <h5>{size}</h5>
               <div className="d-flex justify-between">
                <h6 className=" my-auto"> <span>{quantity}</span> items</h6>
                <div>
              <button onClick={decrementCartItems}><img className="mr-3" src={minus} alt="" /></button> 
              <button onClick={incrementCartItem}><img src={plus}  alt="" /></button> 
              </div>
               </div>
            
               </div>
         </div>  

</li>
</>
    );
  }
  
  export default CartProduct;
  