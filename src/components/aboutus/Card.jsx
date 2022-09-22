import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Card(props){
  const [inc,setInc]=useState(0);
  
  function changeInc(){
   
    setInc(inc+1);
  }
  function changeDec(){
   
    setInc(inc-1);
  }
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
          color: "#ff6d75"
        },
        "& .MuiRating-iconHover": {
          color: "#ff3d47"
        }
      });
return <div className="card h-100">
<img class=" card-img-top img_product" src={props.img} alt=""/>

<div className="card-body text-center">
  <h5 className="card-title">{props.title}</h5>
</div>
<ul className="list-group list-group-flush text-center">
  <li className="list-group-item">
  <StyledRating
      name="customized-color"
      defaultValue={2}
      getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />

  </li>
  <li className="list-group-item price"> <span className="text_color">{props.min}</span> <span>{props.max}</span></li>
  <li className="list-group-item"><button type="button" className="btn btn-default icon_btn" onClick={changeInc}>
      <span className="fa-solid fa-plus" ></span></button> {inc} <button type="button" className="btn btn-default icon_btn"
      onClick={changeDec}><span class="fa-solid fa-minus"></span></button>
  </li>
</ul>
</div>
}
export default Card;