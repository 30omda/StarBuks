import "./Headmenu.css";
import datas from "../../data.json";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import Loading from "../Loading/Loading";
function Headmenu() {


   const [loading, setLoading] = useState(false);

   let data =datas.menus;


   useEffect(() => {
 if(data.length == 0){
   setLoading(true);
 }else{
   setLoading(false);
 }
    }, []);



   console.log(data);
   let Menu = data?.map((itm)=>{
         let children = itm.children;
               let childData= children?.map((itms)=>{
               let products = itms.products ;
                     let productImg = products?.map((sds)=>{
                        return (
                           <>
                           <div className="img">  <Link  to ={`/menu/${itms.id}`}><img src={sds.assets.masterImage.uri}  alt="" /></Link></div>
                           </>
                        )
                     })

            // ------------------ children img map-------------------------
            let imtgss = itms.children;
                           let imgChild= imtgss?.map((imgss)=>{


                              return (
                                 <>
                                 <div className="img"> <Link to ={`/menu/${itms.id}`}>   <img src={imgss.products[0].assets.masterImage.uri}  alt="" /> </Link></div>
                                 </>
                              )
                           }) 


               return(
               <>
                  <div className="col-lg-6 col-sm-12 p-0 ">
                  <div className="d-flex mb-5 cardd"  >
                     {imgChild[1]}
                     {productImg[0]}
                  <Link className="link" to ={`/menu/${itms.id}`}>{itms.name}</Link>
                  </div>
                  </div>
               </> )
            })
      //------------------ end childrens map-----------------------------

         return(
            <>
               <h4>{itm.name}</h4>
               <hr className="line" />
               <div className="cards row ">
               {childData}
               </div>
             </>
         )
        })




    return (
      
 <>
 {loading?<Loading /> : <section className="headmenu">
         <h3>Menu</h3>
         {Menu}
   </section> }
  
 </>

    );
  }
  
  export default Headmenu;