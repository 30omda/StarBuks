import "./BottomBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useEffect,useState } from "react";
function BottomBar() {
   const total = useSelector(state =>state.cart.totalQuantity)
   
const [enable,setEnable]=useState(true);
const [show,setShow]=useState(false);

   useEffect(() => {
   if(window.localStorage.getItem('user')){
      console.log("sucsses");
      setEnable(true);
   }else{
      console.log("failed");
      setEnable(false);
   }
  }, []);


  function Popup(){

   const click = () => {
      setShow(false)
    }



   return(
     <>
      <div className="alert">
       <div className="contain">
       <h6>Please join us before continuing to the cart</h6>
       <div> 
     
         <button className="later" onClick={click} >later</button>
         <button ><Link to ={'/login'} >Got it</Link></button> 
         </div>
      
       </div>
       
       </div>
     
     </>
   )
    
}
const handleclick = () => {
   if (enable){
      setShow(false);
   }else{
      setShow(true);
   }
}


    return (
 <>
<div className="BottomBar">
{show && <Popup/>}
<div className="icon">

      <span onClick={handleclick}><Link to ={enable ? '/cart' : '#'} className="num ">{total}</Link></span>
   </div>

   

</div>
 </>
    );
  }
  
  export default BottomBar;