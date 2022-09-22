import React from "react";
import two from "../../images/2.png";
import Fab from '@mui/material/Fab';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
function AboutUs(){
return <section id="about_us">

<div class="row">
  <div class="col-6">
    <h2 class="about_title">ABOUT US</h2>
    <p class="about_par">Lorem ipsum dolor sit amet. Et corrupti alias ex dignissimos accusamus ut consequatur quas et nobis impedit ad voluptas quos? Officiis voluptatem eos mollitia dicta et accusamus fugit qui perferendis quos et perferendis
      dolores! Aut cupiditate voluptatem quo cumque facilis aut assumenda porro et assumenda officia et odit quasi.
 Eos sint rerum in quia sunt ut similique quasi est tenetur in maxime soluta in assumenda necessitatibus. Et accusantium facilis id nihil unde ut cumque rerum et fugit galisum cum alias dolor qui minus expedita.</p>
 <Fab variant="extended" size="medium" color="primary" aria-label="add" style={{backgroundColor:"#E60965"}} >
        <ReadMoreIcon sx={{ mr: 1 }} />
        Read more
      </Fab>
    
  </div>
  <div class="col-6">
    <img class="fleur" src={two} alt=""/>
  </div>

</div></section>;
}
export default AboutUs;