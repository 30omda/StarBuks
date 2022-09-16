import "./Footer.css";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import spotify from "../../assets/icons/footer/spotify.svg";
import youtube from "../../assets/icons/footer/youtube.svg";
import pinterest from "../../assets/icons/footer/pinterest.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import { useLocation } from "react-router-dom";
import { useState ,useEffect } from "react";






function Footer() {
  const navigates = useLocation();
  const [footer,setFooter]=useState(true);  

  useEffect(()=>{
 if (navigates.pathname == "/cart" || navigates.pathname == "/login" || navigates.pathname == "/findstore" ){
    
  setFooter(false);}else{
    setFooter(true);
      } 
    
  },[navigates])






let footerInddfo = [ 
 {  
  "id" :1,
  "head" :"About Us",
  "title":["Our Company","Our Coffee","Stories and News","Starbucks Archive","Investor Relations", "Customer Service"]
}, 
    {  
      "id" :2,
      "head" : "Careers",
      "title":["Culture and Values","Inclusion, Diversity, and Equity","College Achievement Plan","Alumni Community","U.S. Careers","International Careers"] 
    },
        { 
          "id" :3,
          "head" :"Social Impact",
          "title":["People","Planet","Environmental and Social Impact Reporting"]
        }, 
           {  
            "id" :4,
            "head" :"For Business Partners",
            "title":["Landlord Support Center","Suppliers","Corporate Gift Card Sales","Office and Foodservice Coffee"]
          }, 
               {  
                "id" :5,
                "head" : "Order and Pickup",
                "title":["Order on the App","Order on the Web","Delivery","Order and Pickup Options","Explore and Find Coffee for Home"]
              }
 
];








let footerData = footerInddfo.map((itm) => {

let titles = itm.title.map((itms)=>{
  return <p>{itms}</p> ;
  
})

  
  return (
    <>
    <div className="data">
    <h5>{itm.head}</h5>
      {titles}
    </div>

</>
)
} );






if(footer == false){
  return '';
}else{
  return (
    <>
   <footer className="pt-5">
   <hr/>
   <div className="container pt-5">
<div className=" d-flex footerData"> {footerData}</div>
<hr className="down-line"/>




<div className="social">
<div className="d-flex justify-content-center">
<a href="#"> <img src={facebook}  alt="facebook"  /></a>
<a href="#"> <img src={instagram} alt="instagram" /></a>
<a href="#"> <img src={pinterest} alt="pinterest" /></a>
<a href="#"> <img src={twitter}   alt="twitter"   /></a>
<a href="#"> <img src={spotify}   alt="spotify"   /></a>
<a href="#"> <img src={youtube}   alt="youtube"   /></a>
</div>


<div className="terms-privacy d-flex  justify-content-center mt-3 ">
 <a href="#">Privacy Policy</a>
 <p className="mx-3">|</p>
 <a href="#">Terms of Use</a>
 <p className="mx-3">|</p>
 <a href="#">CA Supply Chain Act</a>
 <p className="mx-3">|</p>
 <a href="#">Cookie Preferences</a>

</div>

<h6 className="my-3">© 2022 Starbucks Coffee Company. All rights reserved.</h6>
</div>
</div>
   </footer>
   
    </>
   );
}
   
  }
  export default Footer;