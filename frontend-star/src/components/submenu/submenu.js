import "./submenu.css";
import Sidebar from "../SideBar/Sidebar";
import datas from "../../data.json";

function Submenu() {

   let data =datas.menus;
   console.log(data);
   /*
   =====================================
   |)()()()()()()()(-)()()()()()()()()(|
   |---------RENDERING MENU -----------|
   |)()()()()()()()(-)()()()()()()()()(|
   =====================================
    */
   let Menu = data?.map((itm)=>{
   let children = itm.children;
   
      //------------------ childrens map-----------------------------
      let childData= children?.map((itms)=>{
         console.log(itms);

      // ------------------ products img map-------------------------
     

         let products = itms.products ;
         let productImg = products?.map((sds)=>{
            return (
               <>
                <div className="img">   <img src={sds.assets.masterImage.uri}  alt="" /></div>
               </>
            )
         })

       // ------------------ children img map-------------------------
        let imtgss = itms.children;
        let imgChild= imtgss?.map((imgss)=>{


         return (
            <>
             <div className="img">   <img src={imgss.products[0].assets.masterImage.uri}  alt="" /></div>
             </>
         )
      }) 


         return(
         <>
            <div className="col-lg-6 col-sm-12">
            <div className="d-flex mb-5 cardd"  >
               {imgChild[1]}
               {productImg[0]}
            <a href="">{itms.name}</a>
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
 <div className="d-flex">
 <Sidebar />
   <section className="headmenu">
         <h3>Menu</h3>
         {Menu}
   </section>
   </div>
 </>

    );
  }
  
  export default Submenu;