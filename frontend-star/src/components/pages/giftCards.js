import Gifts from "../Gifts/Gifts";
import { useEffect } from "react";
function GiftCards() {
  useEffect(()=>{  window.scrollTo(0, 0);

  },[])
  
    return (
     <>
    <Gifts />
  
     </>
    );
  }
  
  export default GiftCards;