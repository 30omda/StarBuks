import $ from "jquery";
import { useState ,useEffect } from "react";





function SizeOption ({param , sizeCode , itemsize}) {
  const [size,setSize]= useState('');


  useEffect(()=>{
    setSize($("input:checked").val());
    itemsize(size)
  },[])
  useEffect(()=>{

    itemsize(size)
  },[size])


const handleSubmit = (event) => {
  event.preventDefault();
  const sizeVal = event.target.value;
  setSize(sizeVal);
}



    const handleClick = (event) => {
        $("input + div").removeClass("active");
        event.currentTarget.classList.add("active");
      };



      
   
        if (param == "Beverage") {
          return (
            <>
              <div className="size-option">
                <h2>Size options</h2>
                <hr />
                <div >
                <form onChange={handleSubmit} className="sizes d-flex">
                  <div>
                  
                    <label key="Short">
                      <input
                        type="radio"
                        name="size"
                        id="Short"
                        value="Short"
                        checked="checked"
                      />
                      <div
                        className="Short img-size active "
                        onClick={handleClick}
                      ></div>
                      <p className="size">Short</p>
                    </label>
                  </div>
                  <div>
                    <label key="Tall">
                      <input
                        type="radio"
                        name="size"
                        id="Tall"
                        value="Tall"
                      />
                      <div
                        className="Tall img-size"
                        onClick={handleClick}
                      ></div>
                      <p className="size">Tall</p>
                    </label>
                  </div>
                  <div>
                    <label key="Grande">
                      <input
                        type="radio"
                        name="size"
                        id="Grande"
                        value="Grande"
                      />
                      <div
                        className="Grande img-size"
                        onClick={handleClick}
                      ></div>
                      <p className="size">Grande</p>
                    </label>
                  </div>
                  <div>
                    <label key="Venti">
                      <input
                        type="radio"
                        name="size"
                        id="Venti"
                        value="Venti"
                      />
                      <div
                        className="Venti img-size"
                        onClick={handleClick}
                      ></div>
                      <p className="size">Venti</p>
                    </label>
                    
                  </div>
                  </form>
                </div>
                
              </div>
              
            </>
          );
        } else if (param == "Coffee") {
          return (
            <>
              <div className="size-option">
                <h2>Size options</h2>
                <hr />
                <div className="sizes-1 d-flex">
                <form onChange={handleSubmit}>
                  <div>
                    
                    <label key="bean">
                      <input
                        type="radio"
                        name="bean"
                        id="bean"
                        value="bean"
                        checked="checked"
                      />
                      <div
                        className="bean img-size active "
                        onClick={handleClick}
                      ></div>
                      <p className="size">Whole bean coffee</p>
                      <p>{sizeCode}</p>
                    </label>
                    
                  </div>
                  </form>
                </div>
              </div>
            </>
          );
        } else {
          return "";
        }
    



}


export default SizeOption;