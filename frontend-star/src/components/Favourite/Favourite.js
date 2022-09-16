import "./Favourite.css";

const Favourite = () => {


    return(
        <>
          <div className="favourite mt-5  text-center">
              <div className="top">
          <h2>Get your favorites for free</h2>
          <ul class="nav nav-pills text-center " id="pills-tab" role="tablist">
      
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-25-tab" data-bs-toggle="pill" data-bs-target="#pills-25" type="button" role="tab" aria-controls="pills-25" aria-selected="true">25</button>
    </li>


    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-50-tab" data-bs-toggle="pill" data-bs-target="#pills-50" type="button" role="tab" aria-controls="pills-50" aria-selected="false">50</button>
    </li>


    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-150-tab" data-bs-toggle="pill" data-bs-target="#pills-150" type="button" role="tab" aria-controls="pills-150" aria-selected="false">150</button>
    </li>


    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-200-tab" data-bs-toggle="pill" data-bs-target="#pills-200" type="button" role="tab" aria-controls="pills-200" aria-selected="false">200</button>
    </li>


    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-400-tab" data-bs-toggle="pill" data-bs-target="#pills-400" type="button" role="tab" aria-controls="pills-cont400act" aria-selected="false">400</button>
    </li>


  </ul>

  </div>

  <div className="down">
  <div class="tab-content  " id="pills-tabContent">


  {/* ----------------------1--------------------------------- */}

    <div class="tab-pane d-flex align-items-center justify-content-center  text-start fade show active" id="pills-25" role="tabpanel" aria-labelledby="pills-25-tab">
        <img className="imgs" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="" />
        <div>
  <h3>Customize your drink</h3>
  <p>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
  </div>
  </div>





  {/* ----------------------2--------------------------------- */}

    <div class="tab-pane d-flex align-items-center justify-content-center  text-start fade " id="pills-50" role="tabpanel" aria-labelledby="pills-50-tab">
    <img className="imgs" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png" alt="" />
        <div>
  <h3>Brewed hot coffee,<br/>bakery item or hot tea</h3>
  <p>Pair coffee cake or an almond croissant with your fresh cup of hot brew.</p>
  </div>
  </div>







  {/* ----------------------3--------------------------------- */}
    <div class="tab-pane d-flex align-items-center justify-content-center  text-start fade" id="pills-150" role="tabpanel" aria-labelledby="pills-150-tab">
    <img className="imgs" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png" alt="" />
        <div>
  <h3>Handcrafted drink<br/>hot breakfast or parfait</h3>
  <p>Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.</p>
  </div>

  </div>





  {/* ----------------------4--------------------------------- */}
  <div class="tab-pane d-flex align-items-center justify-content-center  text-start fade" id="pills-200" role="tabpanel" aria-labelledby="pills-200-tab">
  <img className="imgs" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="" />
        <div>
  <h3>Salad, sandwich <br/>or protein box</h3>
  <p>Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.</p>
  </div>
  </div>







  {/* ----------------------5--------------------------------- */}
  <div class="tab-pane d-flex align-items-center justify-content-center  text-start fade" id="pills-400" role="tabpanel" aria-labelledby="pills-400-tab">
  <img className="imgs" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="" />
        <div>
      <h3>Select merchandise <br/>or at-home coffee</h3>
  <p>Take home a signature cup, a bag of coffee or your choice of select coffee accessories.</p>
  </div>
  </div>
  </div>
  </div>
          </div>
          </>
    )
}
 export default Favourite;