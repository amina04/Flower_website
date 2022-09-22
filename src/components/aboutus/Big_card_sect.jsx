import React from "react";
import bg1 from "../../images/5.jpg";
import bg2 from "../../images/6.jpg";
function Big_card_sect(){
return<div className="row">
<div className="col-lg-6 col-md-6 col-sm-12 box" style={{ backgroundImage:`url(${bg1})` ,backgroundColor: "#F7D9D9"}}>
    <h4 className="contenent">UP to 30 % OFF</h4>
    <h3 className="contenent">SUMMER</h3>
    <a href="#" className="styled"><h5 className="contenent styled">Shape Now</h5></a>
</div>
<div className="col-lg-6 col-md-6 col-sm-12 box" style={{backgroundImage: `url(${bg2})`,backgroundColor: "#DDDDDD" }}>
    <h4 className="contenent">Wedding collection</h4>
    <h3 className="contenent">FLOWER</h3>
    <a href="#" className="styled"><h5 className="contenent styled">Shape Now</h5>
</a>
</div>
</div>

}
export default Big_card_sect;