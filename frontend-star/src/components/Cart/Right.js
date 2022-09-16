

import CartProduct from "./cartProduct";


function Right({ products }) {
console.log(products);

  const product = products?.map((pro)=>{

    return(
      <>


      <CartProduct id={pro.id} title={pro.title} img={pro.img} size={pro.size} quantity={pro.quantity}/>
      
      </>
    )
  }) 
    return (
      <>
         <div className="col-lg-8 right">
      
             
      <ul className="products">
     
     {product}

      </ul>

        </div>

  
      </>
    );
  }
  
  export default Right;
  