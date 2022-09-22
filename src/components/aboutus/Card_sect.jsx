import React from "react";
import one from "../../images/1.png";
import second from "../../images/second.png";
import three from "../../images/3.png";
import four from "../../images/4.png";
import Card from "./Card";
function Card_sect(){
    return <div class="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
  {/* h-100 por mettre les card ont le meme longueuur  */}
  <Card img={one} title="Blue Rose" min="$40.00" max="$90.00"/>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <Card img={second} title="Yellow Rose" min="$40.00" max="$90.00"/>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <Card img={three} title="Pink tulipe" min="$40.00" max="$90.00"/>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <Card img={four} title="Luxury Rose" min="$40.00" max="$90.00"/>
    </div>
  </div>
}
export default Card_sect;