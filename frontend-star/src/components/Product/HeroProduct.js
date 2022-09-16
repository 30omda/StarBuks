import { useDispatch } from "react-redux";
import { cartActions } from "../../assets/store/cartSlice";
import AddToOrder from "./AddToOrder";
import { useSelector } from "react-redux/es/exports";
import { useState ,useEffect } from "react";

function HeroProduct({param,thumbnail,size}){
  const [show,setShow]=useState(false);
  const total = useSelector(state =>state.cart.totalQuantity);
  // const items =useSelector(state =>state.cart.itemsList);
 
  // useEffect(()=>{
  //  localStorage.setItem('cart',JSON.stringify(items))
  //  },[items])
 


// add item to cart 
const dispatch = useDispatch();
const incrementCartItem = () => {
  if ( total < 15){ 
    dispatch(
      cartActions.addToCart({
        title:param.name,
        img:thumbnail,
        id:param.name+size,
        size:size,
      })
    );
  }else{ 
  setShow(true);
  }
 
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
      
     <h6 className="link-name d-flex align-items-center">
                    Menu / Hot Coffees /<strong> {param.name} </strong>{" "}
                  </h6>
                  {show &&<Popup/>}
                  <div className="product-hero ">
                    <div className="hero-data ">
                      <div className="img">
                        <img src={thumbnail} alt="" />
                      </div>
                      <div className="product-content ">
                        <h1>{param.name}</h1>
                      </div>
                    </div>
                  </div>
                  <AddToOrder incrementCartItem ={incrementCartItem}/>
    </>
)

}


export default HeroProduct;