import "./Gifts.css";
import giftData from "../../giftcards.json";

const Gifts = () => {

let datas = giftData.giftcards;
let cards = datas?.map((itm)=>{

let imgs = itm.uri;    
let cardImgs = imgs?.map((img)=>{
    return (
<img className="col-lg-3 col-md-3 col-md-12" src={img} alt="" />
    )
})


return(
<>
<h5>{itm.name}</h5>
<div className="cards row">
{cardImgs}
</div>

</>
)})




    return(
<>
<section className="gifts">
{cards}
</section>
<section className="gift-card">
<div className="d-flex Gift-Cards">
    <img src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg" alt="" />
    <div className="my-auto">
        <h4>Gift Cards in Bulk</h4>
        <p>There’s an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members.</p>
        <a href="">Shop now</a>
    </div>
</div>
</section>
</>
    )    
}
export default Gifts;