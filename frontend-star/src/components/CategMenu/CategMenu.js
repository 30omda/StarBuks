import "./CategMenu.css";
import datas from "../../data.json";
import { useParams } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import BottomBar from "../BottomBar.scss/BotttomBar";
import CardProduct from "./CardProduct";
import { useEffect } from "react";


function CategMenu() {


  
    let { id }    = useParams();

    useEffect(()=>{  window.scrollTo(0, 0);

    },[id])



    let thumpnail = (param) => {

      if(param.assets.masterImage.uri !== null ){
         return param.assets.masterImage.uri 
      }else{
         return param.assets.thumbnail.large.uri   
      }
   }


     let data = datas.menus;
     let Menu = data?.map((itm)=>{
     let children = itm.children;    
      
         let childData= children?.map((itms)=>{  
         if (itms.id ==id ){ 
   


         console.log(itms);

         let productss = () =>{

            if(itms.children.length == 0){
               let productItem = itms.products;
               let productItems =   productItem?.map((prod)=>{
               return  <CardProduct param = {prod} thumbnail={thumpnail(prod)} itms={itms}/>    

      })

      return productItems
      }else {

      let imtgss   = itms.children;
      let imgChild = imtgss?.map((imgss)=>{
   




       let perProduct  =   imgss.products;
       let perProducts = perProduct?.map((pro) => {
            return  <CardProduct param = {pro} thumbnail={thumpnail(pro)} itms={itms}/>  
       })

       return (
           <>

           <h4>{imgss.name}</h4>
           <hr className="line"/>
           <div className="cards row ">
             {perProducts}
            </div>
           </>
       )
    }) 
    return imgChild   
     }
}


         return(
         <>
           <h6>Menu / <span>{itms.name}</span> </h6>
           <h2>{itms.name}</h2>
           <div className="row">
            {productss()}
          </div>
         </> )
      }
         }
         )
    
         return(
            <>
               <div className="cards  ">
               {childData}
               </div>
             </>
         )
        })
    return (
 <>
<div className="d-flex">
  
   <Sidebar />
   <section className="headmenu"> 
         {Menu}
   </section>
   </div>
   <BottomBar />
 </>

    );
  }
  
  export default CategMenu;