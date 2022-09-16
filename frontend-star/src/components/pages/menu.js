import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Headmenu from "../Headmenu/Headmenu";
import BottomBar from "../BottomBar.scss/BotttomBar";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

function Menu() {
useEffect(()=>{  window.scrollTo(0, 0);

},[])
    return (
 <>
  
 <div className="d-flex">
   <Sidebar />
   <Headmenu />
   </div>
   <BottomBar/>
 </>
    );
  }
  
  export default Menu;