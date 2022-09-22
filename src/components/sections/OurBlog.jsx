import React from "react";
import seven from "../../images/7.jpg";
import eight from "../../images/8.jpg";
import nine from "../../images/9.jpg";
import Blog from "../Blog/Blog";
function OurBlog(){
return <section id="our_blog">
<h2 className="our_product_title">OUR BLOG</h2>
<div className="row" >
<Blog img={seven} title="Ut officiis recusandae et cumque" paragraph="Lorem ipsum dolor sit amet. Ut deserunt incidunt est laborum quasi quo optio molestiae et earum quas et atque nulla voluptatem consequatur aut maiores."/>
<Blog img={eight} title="Ut officiis recusandae et cumque" paragraph="Lorem ipsum dolor sit amet. Ut deserunt incidunt est laborum quasi quo optio molestiae et earum quas et atque nulla voluptatem consequatur aut maiores."/>
<Blog img={nine} title="Ut officiis recusandae et cumque" paragraph="Lorem ipsum dolor sit amet. Ut deserunt incidunt est laborum quasi quo optio molestiae et earum quas et atque nulla voluptatem consequatur aut maiores."/>
</div>

  </section>
}
export default OurBlog;