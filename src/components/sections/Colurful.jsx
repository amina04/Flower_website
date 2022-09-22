import React from "react";
import second from "../../images/second.png";
function Colurful(){
return   <section id="colrful">
<div class="row">
  <div class="col-6 img_colorful">
      <img class="img_colorful" src={second} alt=""/>
  </div>
  <div class="col-6 text_colorful">
    <h1 class="col_text_big">Beautiful Range Dt</h1>
    <h1 >ColorFul Birthday Flower</h1>
    <button type="button" class="btn btn-lg btn-light download-button" name="button">Buy Collection</button>
  </div>
</div>
</section>
}
export default Colurful;