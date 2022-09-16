import "./Cash.css";
import visa from "../../assets/img/3A.png"

const Cash = () => {
    return(<>
    
    <div className="cash ">
    <div className="container">
    <div className="top-content text-center ">
        <h2 className="title  ">Cash or card, you earn Stars</h2>
        <p className="sub-title">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
    </div>


<div className="cash-content d-flex">
    <div className="first"><h2>1<span>★</span>Star per dollar</h2>
    <p>Pay as you go</p>
    </div>


    <div className="middle d-flex">
     <div><img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="" /></div>
     <div>
     <div><span>Scan and pay separately</span>
     <p>Use cash or credit/debit card at the register.</p></div>
     <div></div>
    </div>
    </div>


    <div className="last d-flex">
     <div><img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="" /></div>
     <div>
     <div><span>Save payment in the app</span>
     <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p></div>
     <div></div>
    </div>
    </div>

</div>


<hr />

<div className="cash-content d-flex">
    <div className="first"><h2>2<span>★</span>Star per dollar</h2>
    <p>Add funds in the app</p>
    </div>


    <div className="middle d-flex">
     <div><img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="" /></div>
     <div>
     <div><span>Preload</span>
     <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p></div>
     <div></div>
    </div>
    </div>


    <div className="last d-flex">
     <div><img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="" /></div>
     <div>
     <div><span>Register your gift card</span>
     <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p></div>
     <div></div>
    </div>
    </div>

</div>
<hr />
<div className="cash-content d-flex">
    <div className="first"><h2>3<span>★</span>Star per dollar</h2>
    <p>With Starbucks® Rewards Visa® Card</p>
    </div>


    <div className="middle d-flex">
     <div><img src={visa} alt="" /></div>
     <div>
     <div><span>Earn Stars even faster</span>
     <p>Earn Stars on all purchases you make with our 
        <a href=""> credit card </a>
opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</p></div>
     <div></div>
    </div>
    </div>


    

</div>

</div>
    </div>
    </>)
}

export default Cash;