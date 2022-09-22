import React from "react";
function NavItem(props){
   
return <li className={props.special?"navbar-item special_item":"navbar-item"}>
<a className={props.special?"navbar-item special_item":"navbar-item"} href={props.href}>{props.content}</a></li>;
}
export default NavItem;