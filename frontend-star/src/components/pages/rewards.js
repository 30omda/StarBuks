import Nav from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Getting from "../GettingStarted/GettingStarted";
import Favourite from "../Favourite/Favourite";
import Endless from "../Endless/Endless";
import Cash from "../Cash/Cash";
import Terms from "../Terms/Terms";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function Rewards() {
  useEffect(()=>{  window.scrollTo(0, 0);

  },[])

    return (
     <>
    <div className="rewards">
     <Hero       />
     <Getting    />
     <Favourite  />
     <Endless    />
     <Cash       />
     <Terms      />
     </div>
     </>
    );
  }
  
  export default Rewards;