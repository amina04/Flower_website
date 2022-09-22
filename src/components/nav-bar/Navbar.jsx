import React from "react";
import NavItem from "./NavItem";
import MenuIcon from '@mui/icons-material/Menu';
function Navbar(){
return <div className="container-fluid" id="title">
<nav className="navbar navbar-expand-lg bg-light ">
<li className="navbar-brand" href="#">Flower</li>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon">
  <MenuIcon/>
  </span>
</button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto">
<NavItem  href="#our_product" content="Product" special={true}/>
<NavItem  href="#our_blog" content="Blog" special={false} />
<NavItem  href="#footer" content="Contact us" special={false}/>
<NavItem  href="#" content="Info" special={false}/>
</ul>
</div>
  </nav>
</div>
}
export default Navbar;