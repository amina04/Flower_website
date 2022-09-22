import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer(){
    var date = new Date();
var year=date.getFullYear();
return <section id="footer">

<p>Copyright <CopyrightIcon fontSize="small"/> {year}</p>
<div>
<a href="https://www.instagram.com/"><InstagramIcon sx={{ color: "#383838", m:1 }} /></a>
<a href="https://www.facebook.com/"><FacebookIcon sx={{ color: "#383838", m:1 }}/></a>
<a href="https://www.linkedin.com/feed/"><LinkedInIcon sx={{ color: "#383838", m:1 }}/></a>
<a href="https://twitter.com/home?lang=fr"><TwitterIcon sx={{ color: "#383838", m:1 }}/></a></div>
</section>
}
export default Footer;