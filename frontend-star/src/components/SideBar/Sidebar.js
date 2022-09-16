import "./Sidebar.css";
import datas from "../../data.json"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect ,useState } from "react";






function Sidebar() {



let data =datas.menus;
let SideBar = data?.map((itm)=>{
let children = itm.children;
let childData= children?.map((itms)=>{
   return(
   <>
   <Link to ={`/menu/${itms.id}`}>{itms.name}</Link>
   </> )
})
   return(
      <>
<h5>{itm.name}</h5>
    {childData}
</>
   )
})

    return (
 <>
<div className="sidbar">
{SideBar}
</div>
 </>
    );
  }
  export default Sidebar;