import { Link } from "react-router-dom";

function CardProduct( { param,thumbnail,itms } ){


    return (
        <>
       
       <div className="col-lg-3 col-sm-6  ">
                        <div className="contain ">
                        <div className="containimg  ">
                     <div className="img ">  <Link to ={`/menu/${itms.id}/${param.name}`}> <img src={thumbnail}   alt="" /> </Link> </div>  </div>
                  <Link className="links text-center " to ={`/menu/${itms.id}/${param.name}`}>{param.name}</Link> </div>
                  </div>  
        </>
    )
    
    }
    
    
    export default CardProduct;