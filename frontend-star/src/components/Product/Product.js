import "./Product.css";
import datas from "../../data.json";
import { useParams } from "react-router-dom";
import BottomBar from "../BottomBar.scss/BotttomBar";
import SizeOption from "./SizeOption";
import HeroProduct from "./HeroProduct";
import { useState , useEffect } from "react";






function Product() {
  useEffect(()=>{  window.scrollTo(0, 0);

  },[])

  let { id }    = useParams();
  const [size,setSize]=useState("");
  const itemSize = (itemSize) => {
     setSize(itemSize);
  } 

  



  let thumpnail = (param) => {
    if (param.assets.masterImage.uri !== null) {
      return param.assets.masterImage.uri;
    } else {
      return param.assets.thumbnail.large.uri;
    }
  };



  let data = datas.menus;
  let Menu = data?.map((itm) => {
    let children = itm.children;
    let childData = children?.map((itms) => {


      let productInfo = () => {

        if (itms.children.length == 0) {


          let productItem = itms.products;
          let productItems = productItem?.map((prod) => {
            if (prod.name == id) {
              

              return  <HeroProduct param = {prod}  thumbnail={thumpnail(prod)} size={size}/>;
            }
           
          });
          return productItems;
        } else {
          let imtgss = itms.children;
          let imgChild = imtgss?.map((imgss) => {
            let perProduct = imgss.products;
            let perProducts = perProduct?.map((pro) => {

              if (pro.name == id) {
                return (
                  <>
                    <HeroProduct param = {pro}  thumbnail={thumpnail(pro)} size={size}/>
                    <SizeOption  param={pro.productType} sizeCode={pro.sizes[0].sizeCode} itemsize={itemSize} />
                  </>
                );
              }
            });
            return <>{perProducts}</>;
          });
          return imgChild;
        }
      };
      return productInfo()
    });
    return <>{childData}</>;
  });

  return (
    <>
      <div className="product">
        {Menu}
    
      </div>
      <BottomBar />
    </>
  );
}

export default Product;
