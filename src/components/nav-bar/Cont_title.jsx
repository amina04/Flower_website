import React from "react";
import first from "../../images/first.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Cont_title(){
return <div className="row" id="title" >
<div className="col-lg-6 part_one">
  <h1>Fresh <span className="text_color">FLOWER</span> & Perfect <span className="text_color">GIFT</span> For Your <span class="text_color">LOVED </span>Ones </h1>
  <h5>Lorem ipsum dolor sit amet. Et corrupti alias ex dignissimos accusamus ut consequatur quas et nobis impedit ad </h5>
  
  <button type="button" className="btn btn-lg btn-light download-button" name="Buy"><ShoppingCartIcon sx={{ fontSize: 25 }}/> Buy</button>
  <button type="button" className="btn btn-lg btn-light download-button" name="Look"><SearchIcon sx={{ fontSize: 25 }} /> Search</button>
</div>
<div className="col-lg-6 part_two" >
  <img className="big_img" src={first} alt=""/>
</div></div>;
}
export default Cont_title;